
const io=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible')})},{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const tog=document.getElementById('navToggle'),nl=document.getElementById('navLinks');
if(tog&&nl)tog.addEventListener('click',()=>nl.classList.toggle('open'));
document.querySelectorAll('.accordion-header').forEach(h=>{
  h.addEventListener('click',()=>{
    const it=h.parentElement,was=it.classList.contains('open');
    document.querySelectorAll('.accordion-item').forEach(i=>i.classList.remove('open'));
    if(!was)it.classList.add('open');
  });
});
document.querySelectorAll('.newsletter-form').forEach(f=>{
  f.addEventListener('submit',e=>{
    e.preventDefault();
    const b=f.querySelector('button'),i=f.querySelector('input');
    if(i&&i.value){const t=b.textContent;i.value='';b.textContent='✓ Đã đăng ký!';setTimeout(()=>b.textContent=t,3000)}
  });
});
