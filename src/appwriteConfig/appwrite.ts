import { Account, Avatars, Client, Databases, Storage } from "appwrite";

const client = new Client();

export const appwriteConfig = {
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID as string,
  endPoint: import.meta.env.VITE_APPWRITE_ENDPOINT as string,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID as string,
  productsCollectionId: import.meta.env
    .VITE_APPWRITE_PRODUCTS_COLLECTION_ID as string,
  historyCollectionId: import.meta.env
    .VITE_APPWRITE_HISTORY_COLLECTION_ID as string,
  releaseCollectionId: import.meta.env
    .VITE_APPWRITE_RELEASE_COLLECTION_ID as string,
  aboutCollectionId: import.meta.env
    .VITE_APPWRITE_ABOUT_COLLECTION_ID as string,
  storageImages: import.meta.env.VITE_APPWRITE_STORAGE_IMAGES_ID,
  storageSquares: import.meta.env.VITE_APPWRITE_STORAGE_SQUARES_ID,
  storageCard: import.meta.env.VITE_APPWRITE_STORAGE_CARD_ID,
};

if (!appwriteConfig.endPoint || !appwriteConfig.projectId) {
  throw new Error("Appwrite configuration is missing required fields");
}

client
  .setEndpoint(appwriteConfig.endPoint)
  .setProject(appwriteConfig.projectId);

export const databases = new Databases(client);
export const account = new Account(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
