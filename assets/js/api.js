
async function fetchProfileData() {
    const url = "https://raw.githubusercontent.com/grapiuna/js-developer-portfolio/main/data/profile.json";
    const profileData = await fetch(url);
    return await profileData.json();
}
