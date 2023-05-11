import { useState } from 'react';
import axios from 'axios';


const Comparision = () => {
const [themeId, setThemeId] = useState('');
const [assets, setAssets] = useState([{ assetName: '', assetAllocationPercentage: '' }]);

const handleAddRow = () => {

setAssets([...assets, { assetName: '', assetAllocationPercentage: '' }]);

};

const handleDeleteRow = (index) => {
const newAssets = [...assets];
newAssets.splice(index, 1);
setAssets(newAssets);
};

const handleAssetChange = (e, index) => {
const { name, value } = e.target;
const newAssets = [...assets];
newAssets[index][name] = value;
setAssets(newAssets);
};

const handleSaveAsset = async (asset) => {
try {
const data = {
assetName: asset.assetName,
assetAllocationPercentage: asset.assetAllocationPercentage,
theme: { themeId: parseInt(themeId) },

};

await axios.post(`http://localhost:8087/project/api/assets`, data);

alert('Asset saved successfully!');

} catch (error) {

console.error(error);

alert('Asset Allocation Reach 100% You cant add more assests!');

}

};

const handleSubmit = async (e) => {
e.preventDefault();
try {
await Promise.all(assets.map((asset) => handleSaveAsset(asset)));
alert('Assets saved successfully!');
setThemeId('');
setAssets([{ assetName: '', assetAllocationPercentage: '' }]);

} catch (error) {

console.error(error);
alert('Error saving assets!');
}
};

return (
<div className='table table-sm table-dark'> 

<h1>Assest Name</h1>
<br/>

<form onSubmit={handleSubmit}>
<label htmlFor="themeId">Enter Theme ID:</label>
<input 
type="text"
id="themeId"
name="themeId"
value={themeId}
onChange={(e) => setThemeId(e.target.value)}

/>
<table className='raman'>
<thead>
<tr>
<th>Theme ID</th>
<th>Asset Name</th>
<th>Allocation Percentage</th>
<th>Actions</th>
</tr>
</thead>

<tbody>
{assets.map((asset, index) => (
<tr key={index}>
<td>{themeId}</td>
<td>
<input
type="text"
name="assetName"
value={asset.assetName}
onChange={(e) => handleAssetChange(e, index)}

/>
</td>
<td>
<input
type="number"
name="assetAllocationPercentage"
value={asset.assetAllocationPercentage}
onChange={(e) => handleAssetChange(e, index)}
/>
</td>
<td>

{index === assets.length - 1 && (
<button type="button" onClick={handleAddRow}>
Add Row
</button>

)}
<button type="button" onClick={() => handleDeleteRow(index)}>
Delete
</button>
<button type="button" onClick={() => handleSaveAsset(asset)}>
Save
</button>
</td>
</tr>

))}

</tbody>
</table>
<button type="submit">Save Assets</button>
</form>
</div>
);
};

export default Comparision;