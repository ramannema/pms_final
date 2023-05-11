


import { useState } from 'react';
import axios from 'axios';
import '../addStocks/addStocks.css'
import { useLocation } from "react-router-dom";
import { Table, Modal, Button, Form } from 'react-bootstrap';


const AddAssetsPage = () => {
    const location = useLocation();
const searchParams = new URLSearchParams(location.search);
const savedthemeId = searchParams.get('savedThemeId');
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

await axios.post(`http://localhost:8089/project/api/assets`, data);

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

<h1>Add Assets to Theme</h1>
<br/>

<Form onSubmit={handleSubmit}>
<label htmlFor="themeId">Your ThemeID</label>
<input 
type="text"
id="themeId"
name="themeId"
value={themeId}
onChange={(e) => setThemeId(e.target.value)}

/>

<Table striped bordered hover>
<thead className="thead-dark">
<tr className="table table-sm table-dark">
<th>Theme ID</th>
<th>Asset Name</th>
<th>Allocation Percentage</th>
<th>Actions</th>
</tr>
</thead>

<tbody>
{assets.map((asset, index) => (
<tr key={index}>
<td className="font-weight-bold text-dark" ><Form />{themeId}</td>
<td>
<Form.Control
type="text"
name="assetName"
value={asset.assetName}
onChange={(e) => handleAssetChange(e, index)}

/>
</td>
<td>
<Form.Control
type="number"
name="assetAllocationPercentage"
value={asset.assetAllocationPercentage}
onChange={(e) => handleAssetChange(e, index)}
/>
</td>
<td>

{index === assets.length - 1 && (
    <Button className='btn btn-info' onClick={handleAddRow}> Add Row</Button> 

)}&nbsp;
<Button className='btn btn-info' onClick={() => handleDeleteRow(index)}>Delete</Button> &nbsp;
<Button className='btn btn-info' onClick={() => handleSaveAsset(asset)}>Save</Button> &nbsp;
</td>
</tr>

))}

</tbody>
</Table>
<Button type="submit" className='btn btn-info'>Save Assets</Button>
</Form>

</div>
);
};

export default AddAssetsPage;