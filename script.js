document.addEventListener("DOMContentLoaded", () => {
  // Set dynamic copyright year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Form submission handler to format email link automatically
  const supportForm = document.getElementById("support-form");

  supportForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value.trim();

    const emailSubject = encodeURIComponent(`[MojaMatch Support] ${subject}`);
    const emailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nIssue Details:\n${message}`
    );

    // Open mail client addressed to support mail
    window.location.href = `mailto:mojamatch@gmail.com?subject=${emailSubject}&body=${emailBody}`;
  });
});
