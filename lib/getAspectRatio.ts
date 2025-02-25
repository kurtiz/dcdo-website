export const getAspectRatio = (src: string): Promise<number> => {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            const aspectRatio = img.width / img.height;
            resolve(aspectRatio);
        };
    });
};