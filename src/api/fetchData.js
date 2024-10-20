const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const fetchAllData =  () => {

  const fetchAboutData = async () => {
    const response = await fetch(`${BACKEND_URL}/about`, { method: "GET" });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`About Data HTTP error! Status: ${response.status}, Message: ${errorText}`);
    }
    return response.json();
  };

  const fetchCareerData = async () => {
    const response = await fetch(`${BACKEND_URL}/career`, { method: "GET" });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Career Data HTTP error! Status: ${response.status}, Message: ${errorText}`);
    }
    return response.json();
  };

  const fetchContactData = async () => {
    const response = await fetch(`${BACKEND_URL}/contact`, { method: "GET" });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Contact Data HTTP error! Status: ${response.status}, Message: ${errorText}`);
    }
    return response.json();
  };

  const fetchSupportData = async () => {
    const response = await fetch(`${BACKEND_URL}/support`, { method: "GET" });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Support Data HTTP error! Status: ${response.status}, Message: ${errorText}`);
    }
    return response.json();
  };

  const fetchFooterData = async () => {
    const response = await fetch(`${BACKEND_URL}/footer`, { method: "GET" });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Footer Data HTTP error! Status: ${response.status}, Message: ${errorText}`);
    }
    return response.json();
  };

  const fetchAutomateData = async () => {
    const response = await fetch(`${BACKEND_URL}/automate`, { method: "GET" });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Automate Data HTTP error! Status: ${response.status}, Message: ${errorText}`);
    }
    return response.json();
  };

  const fetchFaqData = async () => {
    const response = await fetch(`${BACKEND_URL}/faq`, { method: "GET" });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Faq Data HTTP error! Status: ${response.status}, Message: ${errorText}`);
    }
    return response.json();
  };

  const fetchSignupData = async () => {
    const response = await fetch(`${BACKEND_URL}/signup`, { method: "GET" });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Signup Data HTTP error! Status: ${response.status}, Message: ${errorText}`);
    }
    return response.json();
  };

  const fetchTestimonialsData = async () => {
    const response = await fetch(`${BACKEND_URL}/testimonials`, { method: "GET" });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Testimonials Data HTTP error! Status: ${response.status}, Message: ${errorText}`);
    }
    return response.json();
  };

  const fetchCarousalData = async () => {
    const response = await fetch(`${BACKEND_URL}/carousal`, { method: "GET" });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Carousal Data HTTP error! Status: ${response.status}, Message: ${errorText}`);
    }
    return response.json();
  };

  const fetchBrandData = async () => {
    const response = await fetch(`${BACKEND_URL}/brand`, { method: "GET" });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Brand Data HTTP error! Status: ${response.status}, Message: ${errorText}`);
    }
    return response.json();
  };

  const fetchIntegrationData = async () => {
    const response = await fetch(`${BACKEND_URL}/integration`, { method: "GET" });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Integration Data HTTP error! Status: ${response.status}, Message: ${errorText}`);
    }
    return response.json();
  };

  const fetchPosbytzData = async () => {
    const response = await fetch(`${BACKEND_URL}/posbytz`, { method: "GET" });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`posbytz Data HTTP error! Status: ${response.status}, Message: ${errorText}`);
    }
    return response.json();
  };

  const fetchIframeData = async () => {
    const response = await fetch(`${BACKEND_URL}/iframe`, { method: "GET" });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`iframe Data HTTP error! Status: ${response.status}, Message: ${errorText}`);
    }
    return response.json();
  };

  const fetchFeaturesData = async () => {
    const response = await fetch(`${BACKEND_URL}/feature`, { method: "GET" });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`feature Data HTTP error! Status: ${response.status}, Message: ${errorText}`);
    }
    return response.json();
  };

  const fetchHomeData = async () => {
    const response = await fetch(`${BACKEND_URL}/home`, { method: "GET" });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`home Data HTTP error! Status: ${response.status}, Message: ${errorText}`);
    }
    return response.json();
  };

  const fetchNavbarData = async () => {
    const response = await fetch(`${BACKEND_URL}/navbar`, { method: "GET" });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`navbar Data HTTP error! Status: ${response.status}, Message: ${errorText}`);
    }
    return response.json();
  };

    return {
      fetchAboutData,
      fetchCareerData,
      fetchContactData,
      fetchSupportData,
      fetchFooterData,
      fetchAutomateData,
      fetchFaqData,
      fetchSignupData,
      fetchTestimonialsData,
      fetchCarousalData,
      fetchBrandData,
      fetchIntegrationData,
      fetchPosbytzData,
      fetchIframeData,
      fetchFeaturesData,
      fetchHomeData,
      fetchNavbarData,
    };
};

export default fetchAllData();
