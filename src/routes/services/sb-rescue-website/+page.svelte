<script>
	import Button from "$lib/components/ui/button/button.svelte";
</script>

<div class="container max-w-5xl mt-12">
	<div class="mb-16">
		<h1 class="h2 mb-3">Hola equipo de SB Servicios Globales</h1>
		<div class="space-y-4">
			<p class="text-lg text-muted-foreground">
				Soy Ezequiel, desarrollador frontend y me especializo en ayudar a negocios a mejorar su
				presencia en Internet.
			</p>
			<p class="text-lg text-muted-foreground">
				He grabado un video corto con información personalizada sobre su sitio web y cómo podría
				mejorar para atraer más clientes y funcionar más rápido en dispositivos móviles.
			</p>
		</div>
	</div>
	<div class="video my-10">
		<div style="position: relative; padding-bottom: 62.5%; height: 0;">
			<iframe
				title="Loom Website Teardown"
				src="https://www.loom.com/embed/184a796478234f099dd5805cec73769c?sid=4d0df7b3-87a9-4c6e-8f32-b074c35d2f46"
				frameborder="0"
				allowfullscreen
				style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
			/>
		</div>
	</div>

	<div class="space-y-4">
		<p class="text-lg text-muted-foreground">
			Si les parece interesante, me gustaría hablar más y explorar cómo podemos trabajar juntos.
		</p>

		<Button
			href="https://cal.com/ezerangel/llamada-rapida-rescate-web"
			size="lg"
			class="uppercase"
			target="_blank"
			rel="noopener noreferrer"
		>
			Agendar Consulta Gratuita
		</Button>
	</div>
</div>
