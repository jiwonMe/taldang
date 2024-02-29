from typing import Final, List
from io import BytesIO
from PIL import Image
import os
import uuid

from pdf2image import convert_from_path

PREVIEW_IMAGE_DPI = 150

class PDF:

  def __init__(self, path: str, name: str = None):
      self.id: Final = uuid.uuid4()
      self.name: Final = name if name else os.path.basename(path)
      self.path = path
      self.file: Final = self._load_file()
      self.preview_images: Final = self._generate_preview_images()

  def _load_file(self) -> BytesIO:
      with open(self.path, 'rb') as f:
          return BytesIO(f.read())

  def _generate_preview_images(self) -> List[Image.Image]:
      images = convert_from_path(
        pdf_path=self.path,
        dpi=PREVIEW_IMAGE_DPI,
    )
      return []

  def __str__(self):
      return f'PDF: {self.name}'
