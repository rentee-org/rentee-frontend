import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UploadApiResponse, v2 as Cloudinary } from 'cloudinary';
import { File } from 'multer';

@Injectable()
export class UploadService {
  async uploadImage(file: File): Promise<UploadApiResponse> {
    const image = new Promise<UploadApiResponse>((resolve, reject) => {
      Cloudinary.uploader.upload_stream({ resource_type: 'image' }, (err, result) => {
        if (err) {
          console.error('Error uploading image to Cloudinary:', err); // Log the error
          return reject(
            new InternalServerErrorException('Failed to upload image. Please try again later.')
          );
        }
        if (result) {
          resolve(result as UploadApiResponse); // Type assertion to UploadApiResponse
        } else {
          reject(new InternalServerErrorException('Invalid response from Cloudinary.'));
        }
      }).end(file.buffer);
    }).catch((error) => {
      // Handle any unexpected errors
      console.error('Unexpected error during image upload:', error);
      throw new InternalServerErrorException('An unexpected error occurred during image upload.');
    });

    return image; // Return the promise
  }

  async uploadImageToCloudinary(file: File): Promise<UploadApiResponse> {
    try {
      const result = await this.uploadImage(file);
      return result;
    } catch (error) {
      console.error('Error in uploadImageToCloudinary:', error); // Log the error
      throw error; // Rethrow the error to be handled by the caller
    }
  }


}
