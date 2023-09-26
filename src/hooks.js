import InstitutionCONTRACT_ABI from './abis/institutionabi.json'
import CertificateCONTRACT_ABI from './abis/certificateabi.json'
import { InstitutionContractAddress, CertificateContractAddress } from "./constants";
import { ethers } from "ethers";

const getInstitutionContract = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const institutionContract = new ethers.Contract(InstitutionContractAddress, InstitutionCONTRACT_ABI, signer);
    return institutionContract;
  };

  const getCertificateContract = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const institutionContract = new ethers.Contract(CertificateContractAddress, CertificateCONTRACT_ABI, signer);
    return institutionContract;
  };

  const institutionContract = getInstitutionContract();
  const certificateContract = getCertificateContract();

  export const addInstitute = async (address, name, acronym, link) => {
    try {
      const tx = await institutionContract.addInstitute(address, name, acronym, link);
      await tx.wait(); // Wait for the transaction to be mined
      console.log("Institute added successfully.");
    } catch (error) {
      console.error("Error adding institute:", error);
    }
  };
  
  // Function to generate a certificate
  export const generateCertificate = async (id, candidateName, creationDate) => {
    try {
      const tx = await certificateContract.generateCertificate(id, candidateName, creationDate);
      await tx.wait(); // Wait for the transaction to be mined
      console.log("Certificate generated successfully.");
    } catch (error) {
      console.error("Error generating certificate:", error);
    }
  };
  
  // export const revokeCertificate = async (id) => {
  //   try {
  //     const tx = await certificateContract.revokeCertificate(id);
  //     await tx.wait(); // Wait for the transaction to be mined
  //     console.log("Certificate revoked successfully.");
  //   } catch (error) {
  //     console.error("Error revoking certificate:", error);
  //   }
  // };
  
  // Example function to retrieve institute data
  export const getInstituteData = async (address) => {
    try {
      const data = await institutionContract.getInstituteData(address);
      console.log("Institute Data:", data);
    } catch (error) {
      console.error("Error retrieving institute data:", error);
    }
  };
  
  // Example function to retrieve certificate data
  export const getCertificateData = async (id) => {
    try {
      const data = await certificateContract.getData(id);
      console.log("Certificate Data:", data);
    } catch (error) {
      console.error("Error retrieving certificate data:", error);
    }
  };