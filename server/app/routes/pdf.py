from fastapi import APIRouter, Body
from app.services.pdf_service import annotate_pdf

router = APIRouter()

@router.post("/annotate_pdf")
def annotate_pdf_route(
    name: str = Body(...),
    gender: str = Body(...),
    birth_date: str = Body(...),
    address: str = Body(...),
    phone: str = Body(...),
):
    return annotate_pdf(name, gender, birth_date, address, phone)