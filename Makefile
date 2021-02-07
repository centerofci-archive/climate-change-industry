PHONY: github

github:
	npm run build
	rm -rf docs/*
	scp -r ./build/* ./docs/
	git add -A
	git commit -m "update github pages"
	git push