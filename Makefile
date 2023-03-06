TAG=$(shell date +%d.%m.%Y)

add:
		git add .
commit: add
		git commit -m "Atualizado em $(TAG). cotacao_crypto"
push:   commit
		git push
