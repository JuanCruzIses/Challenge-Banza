interface FetchImageResult {
  data?: { url: string } | null;
  error?: string | any;

}

const FetchImages = async (idImage: string): Promise<FetchImageResult> => {
     const url = `https://www.artic.edu/iiif/2/${idImage}/full/843,/0/default.jpg`;
    if (!idImage) return { data: null };
    try {
        const data = await fetch(url);
        return {data: data};
    }
    catch (error) {
        return {error: error}
    }
}

export default FetchImages