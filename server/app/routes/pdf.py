from fastapi import APIRouter, Body
from fastapi.responses import FileResponse
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
  image_path = annotate_pdf(name, gender, birth_date, address, phone)
  return FileResponse(image_path, media_type='image/png')