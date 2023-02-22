TAG=$(shell date +%d.%m.%Y)

add:
		git add .
commit: add
		git commit -m "Atualizado em $(TAG)."
push:   commit
		git push
