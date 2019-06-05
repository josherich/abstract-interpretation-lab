open AbstractDomain
open AbstractTree
open AbstractSyntax
open Printer

let rec lfp a f leq = let fa = f a in
                         if leq fa a then fa else lfp fa f leq

let leq x y = match x, y with
  | (While (b, sb, (at,atP,af,afP,es,br,brP))),
       (While (b', sb', (at',atP',af',afP',es',br',brP'))) ->
          (leq atP atP') && (leq afP afP') && (leq brP brP')
  | _,_ -> failwith "abstractInterpreter: incorrect leq argument"

let rec fWhile r0 vl x = match x with
  | (While (b, sb, (at,xl,af,afP,es,br,brP))) ->
       let sb' = abstractInterpreter sb (test b xl) vl in
          let afP' = property_after sb' and brP' = property_break sb' in
             let atP = join r0 afP' in
                let afP = join (nottest b atP) brP' in
                   let res = While (b, sb', (at,atP,af,afP,es,br,bot ())) in
                      res
  | _ -> failwith "abstractInterpreter: incorrect fWhile argument"
and abstractInterpreter s r0 vl = match s with 
   | Prog (sl, (at,atP,af,afP,es,br,brP)) -> 
        let sl',atP',afP',brP' = abstractInterpreterStmtlist sl r0 vl in 
            Prog (sl', (at,atP',af,afP',es,br,bot ()))
   | Assign (v, a, (at,atP,af,afP,es,br,brP)) ->
        let afP' = assign v a r0 in
            Assign (v, a, (at,r0,af,afP',es,br,bot ()))
   | Emptystmt (at,atP,af,afP,es,br,brP) -> 
        Emptystmt (at,r0,af,r0,es,br,bot ())
   | If (b, st, (at,atP,af,afP,es,br,brP)) -> 
        let st' = abstractInterpreter st (test b r0) vl in
           let afP' = property_after st' and brP' = property_break st' in
              let afP'' = join afP' (nottest b r0) in
                 If (b, st', (at,r0,af,afP'',es,br,brP'))
   | Ifelse (b, st, se, (at,atP,af,afP,es,br,brP)) -> 
        let st' = abstractInterpreter st (test b r0) vl
        and se' = abstractInterpreter se (nottest b r0) vl in
           let afP' = property_after st' and brP' = property_break st'
           and afP'' = property_after se' and brP'' = property_break se' in
             let afP''' = join afP' afP'' and brP''' = join brP' brP'' in 
                 Ifelse (b, st', se', (at,r0,af,afP''',es,br,brP'''))
   | Break (at,atP,af,afP,es,br,brP) -> 
        Break (at,r0,af,bot (),es,br,r0)
   | While (b, sb, (at,atP,af,afP,es,br,brP)) ->
        let wbot = (While (b, sb, (at,bot (),af,bot (),es,br,bot ()))) in
           let fp = lfp wbot (fWhile r0 vl) leq in 
              (match fp with
              | (While (b, sb, (at,atP,af,afP,es,br,brP))) ->
                   (* update loop body after convergence of loop invariant *)
                   let sb' = abstractInterpreter sb (test b atP) vl in
                       While (b, sb', (at,atP,af,afP,es,br,brP))
              | _ -> failwith "abstractInterpreter: incorrect while transformer")
   | Stmtlist (sl, (at,atP,af,afP,es,br,brP)) -> 
        let sl',atP',afP',brP' = abstractInterpreterStmtlist sl r0 vl in
            Stmtlist (sl', (at,atP',af,afP',es,br,brP'))
and abstractInterpreterStmtlist sl r0 vl = match sl with 
   | [] -> [],r0,r0,(bot ())
   | [s] -> 
        let s' = abstractInterpreter s r0 vl in
           [s'],property_at s',property_after s',property_break s'
   | s :: sl' ->
        let sl'',atP',afP'',brP'' = abstractInterpreterStmtlist sl' r0 vl in
           let s' = abstractInterpreter s afP'' vl in
              let brP = join (property_break s') brP'' in
                 s' :: sl'',atP',(property_after s'),brP
