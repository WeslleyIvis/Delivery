import React from 'react'

const FormProduct = () => {
    const [form, setForm] = React.useState({
        name: '',
        value: '',
        category: '',
        image: ''
    });
    const [status, setStatus] = React.useState('');
    const token = sessionStorage.getItem('Authorization')

    function handleChange({target}: React.ChangeEvent<HTMLInputElement>) {
        const {id, value} = target;
        setForm({...form, [id]: value})
    }

    async function createProduct(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        await fetch('http://localhost:3333/project/product', {
            method: 'POST',
            body: JSON.stringify({
                name: form.name, 
                value: form.value, 
                category: form.category,
                image: form.image
            }),
            headers: {
                'Content-type': 'application/json',
                Authorization: `${token}`
            }
        })
        .then(r => r.json())
        .then(product =>  setStatus(product?.error || 'successfully createdl'))
        .catch(err => console.log(err));
    }

  return (
    <div className='content-form-login'>

        <form onSubmit={createProduct}>
            <label htmlFor="name">Nome</label>
            <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                />
            <label htmlFor="value">Value</label>
            <input
                id="value"
                type="text"
                name="value"
                value={form.value}
                onChange={handleChange}
                required
                />

            <label htmlFor="category">Category</label>
            <input
                id="category"
                type="text"
                name="value"
                value={form.category}
                onChange={handleChange}
                required
                placeholder='Category existent'
                />

            <label htmlFor="image">Image</label>
            <input
                id="image"
                type="text"
                name="value"
                value={form.image}
                onChange={handleChange}
                required
                placeholder='URL image'
                />
            <button type="submit">Create</button>

            {status && <p>{status}</p>}
        </form>
    </div>
    );
}

export default FormProduct
