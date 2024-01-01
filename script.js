// You can add JavaScript functionality here if needed
document.addEventListener('DOMContentLoaded', function () {
    // Function to handle button clicks
    function handleButtonClick(sectionId) {
        alert(`You clicked the button for ${sectionId}!`);
        // You can customize this function to perform any specific action
        // when a button is clicked, such as opening a signup form or triggering other events.
    }

    // Add click event listeners for each button
    document.getElementById('basic-plan-btn').addEventListener('click', function () {
        handleButtonClick('Basic Plan');
    });

    document.getElementById('premium-plan-btn').addEventListener('click', function () {
        handleButtonClick('Premium Plan');
    });

    document.getElementById('enterprise-plan-btn').addEventListener('click', function () {
        handleButtonClick('Enterprise Plan');
    });
});
