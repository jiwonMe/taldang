from fastapi import APIRouter, Body
from app.constants.barobil_const import TEST_FROM_NUMBER, TEST_TO_NUMBER
from app.services.fax_service import send_fax

router = APIRouter()

@router.post("/send_fax")
def send_fax_route(
    file_name: str = Body(...),
    from_number: str = Body(...),
    to_number: str = Body(...),
):
    return send_fax(
        file_name,
        from_number=from_number if from_number else TEST_FROM_NUMBER,
        to_number=to_number if to_number else TEST_TO_NUMBER,
      )