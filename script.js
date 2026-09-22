
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("enquiryForm").addEventListener("submit", function(e){
  e.preventDefault();
  const f = new FormData(this);
  const msg = `Hello Tiwari Constructions,

I have a construction enquiry.

Name: ${f.get("name")}
Mobile: ${f.get("mobile")}
Email: ${f.get("email") || "Not provided"}
Construction Type: ${f.get("type")}
Location: ${f.get("location")}
Approx. Size: ${f.get("size") || "Not provided"}
Requirement: ${f.get("message") || "Not provided"}

Please contact me regarding my project.`;
  window.open("https://wa.me/918889033625?text=" + encodeURIComponent(msg), "_blank");
});
