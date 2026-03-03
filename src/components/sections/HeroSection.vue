<script setup>

</script>

<template>
    <section id="hero" class="hero">
        <h1 class="hero_name">Ahmad Fauzan</h1>
    </section>
</template>

<style scoped>
.hero {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(135deg, var(--color-bg) 0%, var(--color-bg-alt) 100%);
}

.hero_name {
    font-family: var(--font-display);
    font-weight: 900;
    font-size: 4rem;
    color: var(--color-primary);
    letter-spacing: -0.05em;
    text-transform: uppercase;
    background: linear-gradient(90deg, var(--color-accent), var(--color-primary));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}

@media (max-width: 768px) {
    .hero_name {
        font-size: 2.5rem;
    }
}

#hero::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(circle at center, rgba(255, 255, 255, 0.1), transparent);
    opacity: 0.5;
    animation: pulse 6s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.2); opacity: 0.3; }
}


</style>