// app.js
document.addEventListener('DOMContentLoaded', function () {
    const portfolio = [];

    function displayPortfolio() {
        const portfolioList = document.getElementById('portfolioList');
        portfolioList.innerHTML = ''; // Clear previous content

        let totalValue = 0;

        portfolio.forEach(asset => {
            const listItem = document.createElement('li');
            const assetValue = asset.quantity * asset.purchasePrice;
            totalValue += assetValue;

            listItem.textContent = `${asset.name} - Quantity: ${asset.quantity}, Purchase Price: $${asset.purchasePrice}, Value: $${assetValue.toFixed(2)}, Date: ${asset.dateOfPurchase}`;
            portfolioList.appendChild(listItem);
        });

        const totalValueElement = document.getElementById('totalValue');
        totalValueElement.textContent = `Total Portfolio Value: $${totalValue.toFixed(2)}`;
    }

    window.addToPortfolio = function() {
        // Extracting input values
        const assetName = document.getElementById('assetName').value;
        const quantity = parseInt(document.getElementById('quantity').value);
        const purchasePrice = parseFloat(document.getElementById('purchasePrice').value);
        const dateOfPurchase = document.getElementById('dateOfPurchase').value;

        if (!assetName || isNaN(quantity) || isNaN(purchasePrice) || !dateOfPurchase) {
            alert('Please fill in all fields.');
            return;
        }

        // Adding asset to the portfolio
        const newAsset = { name: assetName, quantity, purchasePrice, dateOfPurchase };
        portfolio.push(newAsset);

        // Update the display after adding a new asset
        displayPortfolio();
    }

    window.removeFromPortfolio = function() {
        const removeAssetName = document.getElementById('removeAssetName').value;
        
        if (!removeAssetName) {
            alert('Please enter the asset name to remove.');
            return;
        }

        const indexToRemove = portfolio.findIndex(asset => asset.name === removeAssetName);

        if (indexToRemove !== -1) {
            // Remove asset from the portfolio
            portfolio.splice(indexToRemove, 1);
            // Update the display after removing an asset
            displayPortfolio();
        } else {
            alert('Asset not found in the portfolio.');
        }
    }

    // Call function to initialize the application
    displayPortfolio();
});
