import React from 'react';
import { useParams } from 'react-router-dom';

export default function product() {
    const params = useParams();
  return (
    <div>product {params.productId}</div>
  )
}
