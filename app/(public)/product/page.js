import Link from 'next/link';
import React from 'react';

const ProductList = () => {
    let id=1;
    return (
        <div>
            <Link href={`/product/${id}`}>1</Link>
        </div>
    );
};

export default ProductList;