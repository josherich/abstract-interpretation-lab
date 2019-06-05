(* file abstractDomainConstancy.ml  © Huifeng Chen 2019 *)

open AbstractSyntaxExpressions

type abstractConstant = BOT | Int of int | TOP

let string_abs a = match a with
  | Int i -> string_of_int i
  | BOT -> "BOT"
  | TOP -> "TOP"

let cleq a1 a2 = match (a1,a2) with
  | (BOT,_) -> true
  | (_,BOT) -> false
  | (_,TOP) -> true
  | (TOP,_) -> false
  | (a1, a2) -> (a1=a2)

let cjoin a1 a2 = 
  match (a1,a2) with
  | (BOT,a2) -> a2
  | (a1,BOT) -> a1
  | (_,TOP) -> TOP
  | (TOP,_) -> TOP
  | (a1, a2) -> if (a1=a2) then a1 else TOP

let csum a1 a2 = match (a1,a2) with
  | BOT, _ -> BOT
  | _, BOT -> BOT
  | TOP, _ -> TOP
  | _, TOP -> TOP
  | Int i1, Int i2 -> Int (i1+i2)

let csub a1 a2 = match (a1,a2) with
  | BOT, _ -> BOT
  | _, BOT -> BOT
  | TOP, _ -> TOP
  | _, TOP -> TOP
  | Int i1, Int i2 -> Int (i1-i2)

let stringofconstant a = match a with
  | BOT -> "_|_"
  | Int a -> string_of_int a
  | TOP -> "T"

(* environments are represented as a function of "x" and "y" only *)
type t = string -> abstractConstant

let leq r1 r2 = (cleq (r1 "x") (r2 "x")) &&
                (cleq (r1 "y") (r2 "y")) &&
                (cleq (r1 "z") (r2 "z"))

let initialize vl = ()
let bot () = function x -> BOT
let join r1 r2 = function x -> cjoin (r1 x) (r2 x)
let initialP () = function x -> Int 0
let rec evala a r = match a with
   | Num i -> Int i
   | Var x -> if (x="x") || (x="y") || (x="z") then (r x)
              else failwith "AbstractDomainParity : undeclared variable"
   | Minus (a1,a2) -> csub (evala a1 r) (evala a2 r)
   | Plus (a1,a2) -> csum (evala a1 r) (evala a2 r)
let assign x a r = function y -> if (x=y) && (r x) <> BOT then (evala a r) else (r y)
let smash p1 p2 r = (match (p1,p2) with
   | BOT, _ -> bot ()
   | _, BOT -> bot ()
   | _, _ -> r)
let rec test b r = match b with 
   | Lt (a1,a2) -> (match (evala a1 r), (evala a2 r) with
                    | BOT, _ -> bot ()
                    | _, BOT -> bot ()
                    | TOP, _ -> r
                    | _, TOP -> r
                    | v1, v2 -> if v1<v2 then r else bot())
   | Eq (a1,a2) -> (match (evala a1 r), (evala a2 r) with
                    | BOT, _ -> bot ()
                    | _, BOT -> bot ()
                    | TOP, _ -> r
                    | _, TOP -> r
                    | v1, v2 -> if v1=v2 then r else bot())
   | Neq (a1,a2) -> (match (evala a1 r), (evala a2 r) with
                    | BOT, _ -> bot ()
                    | _, BOT -> bot ()
                    | v1, v2 -> if v1!=v2 then r else bot())
   | Gt (a1,a2) ->  (match (evala a1 r), (evala a2 r) with
                    | BOT, _ -> bot ()
                    | _, BOT -> bot ()
                    | TOP, _ -> r
                    | _, TOP -> bot ()
                    | v1, v2 -> if v1>v2 then r else bot())
   | Nand (b1,b2) -> r

let nottest b r = match b with 
   | Lt (a1,a2) -> (match (evala a1 r), (evala a2 r) with
                    | BOT, _ -> bot ()
                    | _, BOT -> bot ()
                    | TOP, _ -> r
                    | _, TOP -> r
                    | v1, v2 -> if v1<v2 then bot() else r)
   | Eq (a1,a2) -> (match (evala a1 r), (evala a2 r) with
                    | BOT, _ -> bot ()
                    | _, BOT -> bot ()
                    | TOP, _ -> r
                    | _, TOP -> r
                    | v1, v2 -> if v1=v2 then bot() else r)
   | Neq (a1,a2) -> (match (evala a1 r), (evala a2 r) with
                    | BOT, _ -> bot ()
                    | _, BOT -> bot ()
                    | TOP, _ -> r
                    | _, TOP -> r
                    | v1, v2 -> if v1!=v2 then bot() else r)
   | Gt (a1,a2) -> (match (evala a1 r), (evala a2 r) with
                    | BOT, _ -> bot ()
                    | _, BOT -> bot ()
                    | TOP, _ -> bot ()
                    | _, TOP -> r
                    | v1, v2 -> r)
   | Nand (b1,b2) -> r

let rec stringofaP r vl = match vl with
    | [] -> ";"
    | [v] -> v ^ "=" ^ (stringofconstant (r v))
    | v :: vl' -> v ^ "=" ^ (stringofconstant (r v)) ^ "; " ^ (stringofaP r vl')
