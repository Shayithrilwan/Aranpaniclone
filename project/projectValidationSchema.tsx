import * as yup from "yup";



export const ProjectValidationSchema = yup.object().shape({
    name: yup.string().required("Temple name is required"),
    templeNameTamil: yup.string().required("கோவில் பெயர் தேவை"),
    inchargeName: yup.string().required("Incharge name is required!"),
    templeInchargeNameTamil: yup.string().required("கோவில் பொறுப்பாளர் பெயர் தேவை"),
    inchargeMobileNumber: yup.string().required("Mobile number is required"),
    Location: yup.string().required("Location name is required!"),
    locationNameTamil: yup.string().required("இடம் பெயர் தேவை"),
    

    




  
  
  
});