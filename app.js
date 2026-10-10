document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link || typeof window.gtag !== 'function') return;

  const href = link.getAttribute('href') || '';
  let eventName;
  if (href.startsWith('mailto:')) eventName = 'contact_email_click';
  else if (href === '#contact' || href === 'index.html#contact') eventName = 'contact_cta_click';
  else if (href === '#projects' || href === 'index.html#projects') eventName = 'project_browse_click';
  if (!eventName) return;

  const location = link.closest('header') ? 'header'
    : link.closest('footer') ? 'footer'
    : link.closest('.hero') ? 'hero'
    : link.closest('#contact') ? 'contact_section' : 'content';
  window.gtag('event', eventName, { button_location: location });
});
