export const sendContactMessage = async (formData: any) => {
    const accessKey = import.meta.env.VITE_ACCESS_KEY;

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            access_key: accessKey,
            ...formData,
        }),
    });

    return await response.json();
};