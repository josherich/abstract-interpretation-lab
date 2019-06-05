open AbstractSyntax;;
open AbstractDomain;;
open AbstractInterpreter;;
open Printer;;

let run input =
  let lexbuf = Lexing.from_string input in
    try
      let p' = Parser.prog Lexer.token lexbuf in 
         let p'' = built_abstract_syntax p' and vl = AbstractTree.vars p' in
            let p''' = (abstractInterpreter p'' (initialP ()) vl) in
               let margin = 0 in
                  print_labelled_node p''' margin vl
    with
    | Lexer.Error msg ->
        "error: " ^ msg
    | Parser.Error ->
        "error: At offset " ^ (string_of_int (Lexing.lexeme_start lexbuf)) ^ ": syntax error.\n%!";;

(run "while (0<1){ break; x=1; }")