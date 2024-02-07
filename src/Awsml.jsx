import React from 'react'

function Awsml() {
  return (
    <div className='container'>
    <h1>AWS with ML</h1>
    <ul>
        <li>These courses provide an overview of AWS's core services, including EC2 (Elastic Compute Cloud), S3 (Simple Storage Service), IAM (Identity and Access Management), and more. Understanding these foundational services is crucial for working with AWS for machine learning. </li>
        <li>AWS offers several managed machine learning services that abstract away much of the complexity of building and deploying machine learning models. Courses in this area cover services such as Amazon SageMaker, Amazon Comprehend (for natural language processing), Amazon Rekognition (for computer vision), and Amazon Polly (for text-to-speech).</li>
        <li>Amazon SageMaker is a fully managed service that simplifies the process of building, training, and deploying machine learning models at scale. Courses focusing on SageMaker cover topics such as data preprocessing, model training, hyperparameter tuning, model evaluation, and deploying models to production environments.</li>
    </ul>
    </div>
  )
}

export default Awsml