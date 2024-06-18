import axios from "axios";
import { appwriteConfig, databases } from "../appwriteConfig/appwrite";
import { Query } from "appwrite";

export const sendEmail = async (message: string, email: string) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/index.php",
      {
        message,
        email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to send email");
    }

    return response.data;
  } catch (error) {
    console.error("Error while sending email:", error);
    throw new Error("Error while sending email");
  }
};

export const getProductsApi = async () => {
  try {
    const response = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.productsCollectionId
    );
    if (!response.documents) {
      throw new Error("Failed to get data");
    }

    return response.documents;
  } catch (error) {
    console.error("Error while getting data:", error);
    throw new Error("Error while getting data");
  }
};

export const getSingleProductApi = async (id: string) => {
  try {
    const response = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.productsCollectionId,
      [Query.equal("$id", id)]
    );
    if (!response) {
      throw new Error("Failed to get data");
    }

    return response.documents[0];
  } catch (error) {
    console.error("Error while getting data:", error);
    throw new Error("Error while getting data");
  }
};

export const getReleaseApi = async () => {
  try {
    const response = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.releaseCollectionId
    );
    if (!response.documents) {
      throw new Error("Failed to get data");
    }

    return response.documents;
  } catch (error) {
    console.error("Error while getting data:", error);
    throw new Error("Error while getting data");
  }
};

export const getSingleReleaseApi = async (id: string) => {
  try {
    const response = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.releaseCollectionId,
      [Query.equal("$id", id)]
    );
    if (!response) {
      throw new Error("Failed to get data");
    }

    return response.documents[0];
  } catch (error) {
    console.error("Error while getting data:", error);
    throw new Error("Error while getting data");
  }
};

export const getHistoryApi = async () => {
  try {
    const response = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.historyCollectionId
    );
    if (!response.documents) {
      throw new Error("Failed to get data");
    }

    return response.documents[0];
  } catch (error) {
    console.error("Error while getting data:", error);
    throw new Error("Error while getting data");
  }
};

export const getAboutApi = async () => {
  try {
    const response = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.aboutCollectionId
    );

    if (!response.documents) {
      throw new Error("Failed to get data");
    }

    return response.documents[0];
  } catch (error) {
    console.error("Error while getting data:", error);
    throw new Error("Error while getting data");
  }
};
