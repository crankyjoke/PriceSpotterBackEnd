import React, { useState } from "react";

function CreateItemForm() {
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [itemQuantity, setItemQuantity] = useState("");
    const [itemLocation, setItemLocation] = useState("");
    const [itemPriceCurrency, setitemPriceCurrency] = useState("");
    const [itemDescription, setitemDescription] = useState("");
    const [itemImage, setItemImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Use the SAME field names as in your model/serializer
        const formData = new FormData();
        formData.append("itemName", itemName);
        formData.append("itemPrice", itemPrice);
        formData.append("itemQuantity", itemQuantity);
        formData.append("itemLocation", itemLocation);
        formData.append("itemPriceCurrency",itemPriceCurrency)
        if (itemImage) {
            formData.append("itemImage", itemImage);
        }

        try {
            const response = await fetch("http://127.0.0.1:8000/api/items/create/", {
                method: "POST",
                body: formData,
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message); // "Item created successfully"
            } else {
                const errorData = await response.json();
                console.error("Error:", errorData);
            }
        } catch (error) {
            console.error("Network error:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* itemName */}
            <div>
                <label>Item Name:</label>
                <input
                    value={itemName}
                    placeholder="itemName"
                    onChange={(e) => setItemName(e.target.value)}
                    required
                />
            </div>
            {/* itemPrice */}
            <div>
                <label>Price:</label>
                <input
                    type="number"
                    placeholder="Price"
                    value={itemPrice}
                    onChange={(e) => setItemPrice(e.target.value)}
                    required
                />
            </div>
            {/* itemQuantity */}
            <div>
                <label>Quantity:</label>
                <input
                    type="number"
                    value={itemQuantity}
                    placeholder="Quantity"
                    onChange={(e) => setItemQuantity(e.target.value)}
                    required
                />
            </div>
            {/* itemLocation */}
            <div>
                <label>Location:</label>
                <input
                    value={itemLocation}
                    placeholder="Location/Store"
                    onChange={(e) => setItemLocation(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>Price Currency:</label>
                <input
                    value={itemPriceCurrency}
                    placeholder="Currency"
                    onChange={(e) => setitemPriceCurrency(e.target.value)}
                    required

                />
            </div>

            <div>
                <label>Item description:</label>
                <input
                    value={itemDescription}
                    placeholder="Description"
                    onChange={(e) => setitemDescription(e.target.value)}
                    required

                />
            </div>


            {/* itemImage */}
            <div>
                <label>Image:</label>
                <input type="file" onChange={(e) => setItemImage(e.target.files[0])}/>
            </div>

            <button type="submit">Create Item</button>
        </form>
    );
}

export default CreateItemForm;
