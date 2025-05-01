document.addEventListener('DOMContentLoaded', function () {
  // Tab switching functionality
  const tabs = document.querySelectorAll('.rhythm-tab');

  tabs.forEach((tab) => {
    tab.addEventListener('click', function () {
      // Deactivate all tabs
      document.querySelectorAll('.rhythm-tab').forEach((t) => t.classList.remove('active'));
      document.querySelectorAll('.rhythm-content').forEach((c) => c.classList.remove('active'));

      // Activate current tab
      this.classList.add('active');
      document.getElementById('content-' + this.dataset.tab).classList.add('active');
    });
  });
});
