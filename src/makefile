.PHONY: delete
delete: 
	@/bin/rm -f main *~ .*~ *.cmo *.cmi lexer.ml parser.ml parser.mli parser.conflicts
	@find . -lname '*.*' -delete
	
main:
	@ocamllex -q lexer.mll
	@ocamlc -c abstractSyntaxExpressions.ml
	@ocamlc -c abstractDomain.mli
	@ocamlc -c abstractDomain.ml
	@ocamlc -c abstractTree.mli
	@ocamlc -c abstractTree.ml
	@ocamlc -c abstractSyntax.ml
	@ocamlc -c -annot printer.ml
	@menhir --infer --explain parser.mly
	@ocamlc -c parser.mli
	@ocamlc -c lexer.ml
	@ocamlc -c parser.ml
	@ocamlc -c abstractInterpreter.ml
	@ocamlc -c main.ml
	@ocamlc abstractSyntaxExpressions.cmo abstractDomain.cmo abstractTree.cmo abstractSyntax.cmo printer.cmo parser.cmo lexer.cmo abstractInterpreter.cmo main.cmo -o main
