// Example of setting credentials programmatically
import AWS from 'aws-sdk';
import React, { useState } from 'react';

AWS.config.update({
  accessKeyId:ACCESS_KEY,
  secretAccessKey:SECRET_ACCESS_kEY,
  region: REGION, // e.g., us-east-1
});


const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (file) {
      try {
        const s3 = new AWS.S3();
        const params = {
          Bucket:process.env.BUCKET_NAME,
          Key: file.name,
          Body: file,
          ContentType: file.type,
        };
        const daa=await s3.upload(params).promise();
        console.log('File uploaded successfully',daa);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    } else {
      console.warn('No file selected');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload File</button>
    </div>
  );
};

export default FileUpload;
