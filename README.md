# PriceSpotterBackEnd

**PriceSpotterBackEnd** is the backend service for the PriceSpotter app. Built with Django, it manages user authentication, product data, and RESTful API endpoints to power a frontend product comparison platform.

## Features

- User registration and login
- Product listing and detail views
- Admin interface for managing products
- REST API support for frontend integration

## Tech Stack

- Python 3
- Django 4+
- SQLite (development database)
- Django REST Framework

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/crankyjoke/PriceSpotterBackEnd.git
cd PriceSpotterBackEnd
2. Create a virtual environment
bash
Copy
Edit
python3 -m venv env
source env/bin/activate  # On Windows: env\Scripts\activate
3. Install dependencies
bash
Copy
Edit
pip install -r requirements.txt
4. Run migrations
bash
Copy
Edit
python manage.py migrate
5. (Optional) Create a superuser
bash
Copy
Edit
python manage.py createsuperuser
6. Start the development server
bash
Copy
Edit
python manage.py runserver
The server will be available at http://127.0.0.1:8000/.

Project Structure
bash
Copy
Edit
PriceSpotterBackEnd/
├── backend/                # Django app for core backend logic
│   ├── admin.py
│   ├── models.py
│   ├── views.py
│   └── ...
├── manage.py               # Django management script
├── db.sqlite3              # Development database
└── requirements.txt        # Project dependencies
API Endpoints (Sample)
Method	Endpoint	Description
GET	/api/products/	List all products
GET	/api/products/<id>/	Retrieve product details
POST	/api/products/	Add a new product
PUT	/api/products/<id>/	Update a product
DELETE	/api/products/<id>/	Delete a product

Note: Authentication may be required for certain endpoints.
