// Opening hamburger menu
function hamburgeropen () {
    document.querySelector(".hamburger").style.display = "none";
    document.querySelector(".nav-phone").style.borderRadius = "20px";
    document.querySelector(".hamburgerclose").style.display = "inline";
    document.querySelector(".nav-phone").style.height = "max-content";
}

// Closing hamburger menu
function hamburgerclose () {
    document.querySelector(".hamburger").style.display = "inline";
    document.querySelector(".hamburgerclose").style.display = "none";
    document.querySelector(".nav-phone").style.height = "64px";
    document.querySelector(".nav-phone").style.borderRadius = "100px";
}

document.getElementById('contact').addEventListener('click', function() {
    var email = 'ganeshbistakaji@gmail.com'; // Replace with your email address
    var subject = 'Regarding Web Design/Development'; // Replace with your email subject

    // Construct the mailto URL
    var mailtoUrl = 'mailto:' + email + '?subject=' + encodeURIComponent(subject);

    // Attempt to open the default email client
    window.location.href = mailtoUrl;

    // If opening the default email client fails, open Gmail in a new tab
    setTimeout(function() {
        var gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + email + '&su=' + encodeURIComponent(subject);
        window.open(gmailUrl, '_blank');
    }, 5000);
});