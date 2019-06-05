open AbstractSyntaxExpressions
open AbstractTree
open AbstractSyntax
open AbstractDomain

let rec string_of_aexpr a = match a with
| Num i -> string_of_int i
| Var v -> v
| Minus (a1, a2) -> "("^(string_of_aexpr a1)^" - "^(string_of_aexpr a2)^")"
| Plus (a1, a2) -> "("^(string_of_aexpr a1)^" + "^(string_of_aexpr a2)^")"

let print_aexpr a = string_of_aexpr a

let rec string_of_bexpr a = match a with
| Lt (a1, a2)   -> "("^(string_of_aexpr a1)^" < "^(string_of_aexpr a2)^")"
| Eq (a1, a2)   -> "("^(string_of_aexpr a1)^" == "^(string_of_aexpr a2)^")"
| Neq (a1, a2)   -> "("^(string_of_aexpr a1)^" != "^(string_of_aexpr a2)^")"
| Gt (a1, a2)   -> "("^(string_of_aexpr a1)^" > "^(string_of_aexpr a2)^")"
| Nand (b1, b2) -> "("^(string_of_bexpr b1)^" nand "^(string_of_bexpr b2)^")"

let rec print_bexpr b = string_of_bexpr b

let rec print_node s = match s with 
    | Prog (sl, l) -> print_nodelist sl; print_newline ()
    | Assign (v, a, l) -> print_string (v ^ " = "); print_aexpr a; print_string "; "
    | Emptystmt l -> print_string "; "
    | If (b, st, l) -> print_string "(if "; print_bexpr b; print_string " "; print_node st; print_string ") "
    | Ifelse (b, st, se, l) -> print_string "(if "; print_bexpr b; print_string " "; print_node st; 
                            print_string " else "; print_node se; print_string ") "
    | While (b, st, l) -> print_string "(while "; print_bexpr b; print_string " "; print_node st; print_string ") "
    | Break l -> print_string "break; "
    | Stmtlist (sl, l) -> print_string "{ "; print_nodelist sl; print_string "} "
and print_nodelist sl = match sl with 
    | [] -> ()
    | [s] -> print_node s
    | s :: sl' -> print_nodelist sl'; print_node s;; (* nodes in inverse order *)

let string_of_label l = "l" ^ (string_of_int l) ;;
let print_label l = (string_of_label l) ^ ":";;
let bool_to_string  b = if b then "tt" else "ff";;
let labelmargin = 20;;
let rec print_space m = if (m>0) then (print_string " "; print_space (m-1));;
let rec print_margin m = print_space (labelmargin + m + 1)
let print_labelling (at, xl, after, afP, escape, break, brP) m =
    let s = "<" ^ (string_of_label at) ^ ", " ^ (string_of_label after) ^ ", " ^ (bool_to_string escape) ^ ", " ^ (string_of_label break) ^ ">"  in
       print_string s;
       if String.length s < labelmargin then print_space (labelmargin - (String.length s)+ 1);
       print_space m;;
let print_at (at, xl, after, afP, escape, break, brP) = print_label at;;
let print_after (at, xl, after, afP, escape, break, brP) = print_label after;;

let rec print_labelled_node_trace s m = match s with 
    | Prog (sl, ls) -> print_labelling ls m; print_string "Prog:\n"; print_labelled_nodelist_trace sl (m+3); 
                        print_margin m; print_after ls; print_newline ()
    | Assign (v, a, ls) -> print_labelling ls m; print_at ls; print_string (v ^ " = "); print_aexpr a; print_string "; "
    | Emptystmt ls -> print_labelling ls m;  print_at ls; print_string "; " 
    | If (b, st, ls) -> print_labelling ls m; print_string "(if "; print_at ls; print_bexpr b; print_newline ();
                         print_labelled_node_trace st (m+3); print_string ") "
    | Ifelse (b, st, se, ls) ->  print_labelling ls m; print_string "(if "; print_at ls; print_bexpr b; print_newline (); 
                                  print_labelled_node_trace st (m+3); print_newline ();
                                  print_margin m; print_string " else "; print_newline ();
                                  print_labelled_node_trace se (m+3); print_string ") "
    | While (b, sb, ls) -> print_labelling ls m; print_string "(while "; print_at ls; print_bexpr b; print_newline (); 
                            print_labelled_node_trace sb (m+3); print_string ") "
    | Break ls -> print_labelling ls m; print_at ls;  print_string "break; "
    | Stmtlist (sl, ls) -> print_labelling ls m; print_string "Stmtlist: {"; print_newline ();
                               (print_labelled_nodelist_trace sl (m+3); 
                                print_margin m; print_string "} ")
and print_labelled_nodelist_trace sl m = match sl with 
    | [] -> ()
    | [s] -> print_labelled_node_trace s m; print_newline ()
    | s :: sl' -> print_labelled_nodelist_trace sl' m; 
                  print_labelled_node_trace s m; print_newline ();; (* nodes in inverse order *)

(* ===== *)
(* parity printer *)
(* ===== *)

let print_parity (at, xl, after, afP, es, br, brP) vl =
    " [" ^ (stringofaP xl vl) ^ "] ";;

let print_parity_after (at, xl, after, afP, es, br, brP) vl =
    " [" ^ (stringofaP afP vl) ^ "] ";;

let rec print_vars vs = match vs with
    | [] -> ()
    | [v] -> print_string v
    | v :: vs -> print_string v; print_vars vs;;

let rec print_labelled_node_debug s m = match s with 
    | While (b, sb, ls) -> print_string "debug: while "; print_at ls; print_bexpr b; print_newline (); 
    | _ -> ()

let rec print_labelled_node s m vl = match s with 
    | Prog (sl, ls) -> "\n" ^ (print_labelled_nodelist sl (m+3) vl) ^
                        (print_after ls) ^ (print_parity_after ls vl) ^ "\n"
    | Assign (v, a, ls) -> (print_at ls) ^ (print_parity ls vl) ^ v ^ " = " ^ (print_aexpr a) ^ "; "
    | Emptystmt ls ->  (print_at ls) ^ (print_parity ls vl) ^ ";"
    | If (b, st, ls) -> "if " ^ (print_at ls) ^ (print_parity ls vl) ^ (print_bexpr b) ^ "\n" ^
                         (print_labelled_node st (m+3) vl);
    | Ifelse (b, st, se, ls) ->  "if " ^ (print_at ls) ^ (print_parity ls vl) ^ (print_bexpr b) ^ "\n" ^
                                (print_labelled_node st (m+3) vl) ^ "\n" ^ " else " ^ "\n" ^ (print_labelled_node se (m+3) vl);
    | While (b, sb, ls) -> "while " ^ (print_at ls) ^ (print_bexpr b) ^ (print_parity ls vl) ^ "\n" ^
                            (print_labelled_node sb (m+3) vl);
    | Break ls -> (print_at ls) ^ (print_parity ls vl) ^  "break; "
    | Stmtlist (sl, ls) -> "{" ^ "\n" ^ (print_labelled_nodelist sl (m+3) vl) ^ "}"
and print_labelled_nodelist sl m vl = match sl with 
    | [] -> ""
    | [s] -> (print_labelled_node s m vl) ^ "\n"
    | s :: sl' -> (print_labelled_nodelist sl' m vl) ^ 
                  (print_labelled_node s m vl) ^ "\n";; (* nodes in inverse order *)