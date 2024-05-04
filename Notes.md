# Image kit url params -

1. Resizing and Cropping: Adjust the size of your image with parameters like w for width, h for height, and c for crop mode.
2. DPR (Device Pixel Ratio): Use dpr to deliver high-resolution images suitable for retina displays.
3. Format and Quality: Specify the format with f and compress or change the quality with q.
4. Blurring and Placeholder: Apply a blur effect with bl for low-quality image placeholders.
5. Smart Cropping: Enable smart cropping with fo-auto to keep the subject in focus even in thumbnails.
6. Watermarking: Add watermarks or overlays with oi for the image overlay and ot for the text overlay.

For example, to resize an image to 200x200 pixels, you would use the parameter tr:w-200,h-200. To apply a device pixel ratio of 2, you would add dpr-2, and so on.


``` <img src="https://ik.imagekit.io/demo/tr:w-320,h-240/medium_cafe_B1iTdD0C.jpg"
     srcset="https://ik.imagekit.io/demo/tr:w-1024,h-768/medium_cafe_B1iTdD0C.jpg 1024w,
             https://ik.imagekit.io/demo/tr:w-768,h-576/medium_cafe_B1iTdD0C.jpg 768w,
             https://ik.imagekit.io/demo/tr:w-320,h-240/medium_cafe_B1iTdD0C.jpg 320w"
     sizes="(min-width: 1024px) 1024px,
            (min-width: 768px) 768px,
            100vw"
     alt="Responsive image example">
```
