.PHONY: backend frontend test-backend

backend:
	cd backend && npm install && npm start

frontend:
	cd frontend && npm install && npm run dev

test-backend:
	cd backend && npm install && npm test
