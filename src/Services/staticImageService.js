import ApiConstants from "../constants/ApiConstants";

const getFlag=(code="IN",filetype=ApiConstants.CountryFlag.filetype.png)=>`${ApiConstants.CountryFlag.BaseUrl}/${filetype}/${code}`

export default {getFlag}