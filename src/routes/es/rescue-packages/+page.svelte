<script lang="typescript">
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger
	} from "$lib/components/ui/accordion";
	import { Badge } from "$lib/components/ui/badge";
	import { Button } from "$lib/components/ui/button";
	import { Card, CardContent, CardHeader } from "$lib/components/ui/card";
	import Separator from "$lib/components/ui/separator/separator.svelte";
	import {
		ArrowRightIcon,
		BadgeCheckIcon,
		DatabaseZapIcon,
		GaugeIcon,
		LayoutPanelTopIcon,
		MousePointerClickIcon,
		PaintbrushIcon,
		ProportionsIcon,
		TrendingUpIcon,
		XIcon
	} from "lucide-svelte";

	const FAQS = [
		{
			section: "billing",
			label: "Facturación y Pagos",
			items: [
				{
					id: 1,
					label: "¿Puedo cancelar después de que se complete la configuración?",
					description:
						"¡Sí! Puedes pausar o cancelar tu suscripción en cualquier momento. Las tarifas de configuración no son reembolsables, pero conservas todo el trabajo realizado. Cancela con 30 días de anticipación a través de tu portal de Stripe."
				},
				{
					id: 2,
					label: "¿Por qué aún no tengo una factura CFDI?",
					description:
						"La facturación CFDI llegará en la Fase 2 de nuestro sistema. Notificaré a todos los clientes cuando esté lista."
				}
			]
		},
		{
			section: "scope",
			label: "Alcance y Limitaciones del Servicio",
			items: [
				{
					id: 4,
					label: "¿Puedes rediseñar mi logotipo o crear nuevas páginas?",
					description:
						"Los rediseños de logotipos y la creación de nuevas páginas no están incluidos en los paquetes de Rescate. Me centraré en optimizar lo que ya tienes. ¿Necesitas estos servicios? ¡Solo pide una cotización!"
				},
				{
					id: 5,
					label: "¿Qué pasa si mi sitio web necesita más trabajo de lo esperado?",
					description:
						"Cada nivel tiene límites de tiempo específicos para mantener los costos predecibles. Si tu sitio necesita trabajo adicional, enviaré una orden de cambio para su aprobación a $150/hora antes de proceder."
				},
				{
					id: 6,
					label: "¿Puedes escribir contenido para mi sitio web?",
					description:
						"La optimización de contenido está incluida (arreglando lo que ya existe), pero escribir contenido nuevo es un servicio separado a $200/mes. Me enfoco en hacer que tu contenido existente funcione mejor."
				}
			]
		},
		{
			section: "timeline",
			label: "Cronograma y Proceso",
			items: [
				{
					id: 7,
					label: "¿Cuánto tiempo hasta que mi sitio web esté arreglado?",
					description:
						"Inicial: 3-5 días hábiles después de recibir tu Lista de Verificación Previa\nCrecimiento: 5-7 días hábiles\nPremium: 7-10 días hábiles"
				},
				{
					id: 8,
					label: "¿Qué pasa si no me gustan los resultados?",
					description:
						"Tú apruebas todo el trabajo antes de que comience tu suscripción. Haré ajustes durante el período de aprobación sin costo adicional. Una vez aprobado, las tareas de suscripción mensual están cubiertas dentro de tus límites de tiempo."
				},
				{
					id: 9,
					label: "¿Cómo sé en qué estás trabajando cada mes?",
					description:
						"Todos los niveles reciben actualizaciones mensuales por correo electrónico. Los clientes Premium también obtienen acceso a un panel en tiempo real para realizar un seguimiento de las métricas de rendimiento."
				}
			]
		},
		{
			section: "support",
			label: "Soporte Técnico",
			items: [
				{
					id: 10,
					label: "¿Qué pasa si mi sitio web se cae?",
					description:
						"El tiempo de respuesta a las caídas del sitio es de 2 horas para el nivel Premium y de 4 horas para los niveles Inicial y de Crecimiento. Esto incluye problemas de servidor, problemas de seguridad o problemas con el certificado SSL."
				},
				{
					id: 11,
					label: "¿Cómo solicito cambios o actualizaciones?",
					description:
						"Envía un correo electrónico a [hey@ezerangel.com] con tu solicitud. Confirmaré si está dentro de tu asignación de tiempo mensual o si se aplica una facturación adicional. Tiempos de respuesta: 24 horas (Premium), 48 horas (Crecimiento/Inicial)."
				},
				{
					id: 12,
					label: "¿Puedo pausar mi suscripción temporalmente?",
					description:
						"¡Sí! Usa tu portal de Stripe para pausar hasta por 3 meses. Perfecto para negocios de temporada o para planificar el presupuesto. Reanuda en cualquier momento."
				}
			]
		}
	];
</script>

<main class="container max-w-5xl">
	<header class="w-full">
		<div class="flex gap-8 py-20 lg:py-60 items-center justify-center flex-col">
			<div class="flex gap-4 flex-col">
				<h1 class="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center">
					Tu Sitio Web Puede Revivir Esta Misma Semana
				</h1>
				<p
					class="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center"
				>
					No necesitas reconstruirlo. Soluciono los problemas reales: velocidad, SEO, móvil y
					claridad a través de una suscripción todo incluido creada para sitios web de pequeñas
					empresas.
				</p>
			</div>
		</div>
	</header>
	<section class="mb-40">
		<div class="flex flex-col items-center gap-4 max-w-2xl mx-auto">
			<p class="text-center">
				<Badge variant="secondary" class="py-2 px-4 bg-card shadow-sm border border-border">
					Negocios reales con resultados reales
				</Badge>
			</p>
			<blockquote
				class="text-xl font-medium text-center text-balance leading-relaxed tracking-tight"
			>
				&quot;Capturaron perfectamente lo que necesitábamos. Mejoramos el diseño, la estructura y la
				experiencia móvil. La gerencia quedó muy satisfecha con el resultado.&quot;
			</blockquote>
			<p class="text-lg font-medium text-primary">
				Germán Nieves
				<span class="text-muted-foreground"> Coordinador de Ventas en ICUSA </span>
			</p>
		</div>
	</section>
	<section class="my-40">
		<div class="">
			<div>
				<div class="flex gap-4 flex-col items-start">
					<div>
						<Badge>El Problema</Badge>
					</div>
					<div class="flex gap-2 flex-col">
						<h2 class="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
							Los Sitios Desactualizados Te Cuestan Clientes
						</h2>
						<p
							class="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground"
						>
							Un sitio web torpe disuade a los clientes y hace que tu negocio parezca poco
							profesional. Los visitantes móviles tienen dificultades con los malos diseños y los
							motores de búsqueda no pueden clasificar tu sitio sin un SEO adecuado.
						</p>
					</div>
					<div class="flex gap-10 pt-12 flex-col w-full">
						<div class="grid grid-cols-1 items-start lg:grid-cols-3 gap-4 lg:gap-10">
							<div class="flex flex-row gap-4 w-full items-start">
								<XIcon class="w-4 h-4 mt-2 text-primary shrink-0" />
								<div class="flex flex-col gap-1">
									<h3 class="font-medium">Pérdida de clientes potenciales</h3>
									<p class="text-muted-foreground text-sm">
										Los tiempos de carga lentos y el diseño confuso frustran a los visitantes.
									</p>
								</div>
							</div>
							<div class="flex flex-row gap-4 items-start">
								<XIcon class="w-4 h-4 mt-2 text-primary shrink-0" />
								<div class="flex flex-col gap-1">
									<h3 class="font-medium">Poca visibilidad</h3>
									<p class="text-muted-foreground text-sm">
										Un SEO desactualizado significa que tu sitio se esconde detrás de los
										competidores en las búsquedas de Google.
									</p>
								</div>
							</div>
							<div class="flex flex-row gap-4 items-start">
								<XIcon class="w-4 h-4 mt-2 text-primary shrink-0" />
								<div class="flex flex-col gap-1">
									<h3 class="font-medium">Señales de Confianza Perdidas</h3>
									<p class="text-muted-foreground text-sm">
										La falta de reseñas, certificaciones o una marca clara reduce la credibilidad.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="my-40">
		<div class="grid grid-cols-12 items-center gap-4 mb-10">
			<div class="col-span-12 lg:col-span-4 space-y-4">
				<Badge>La Solución</Badge>
				<h2 class="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
					Un Paquete para Rescatar Tu Sitio Web
				</h2>
			</div>
			<div class="col-span-12 lg:col-span-6 lg:col-start-6">
				<p
					class="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground"
				>
					Ofrecemos un servicio de suscripción de tres niveles para rescatar tu sitio web: una
					revisión completa más mejoras continuas. Cada paquete comienza con una tarifa de
					configuración única e incluye optimización mensual para mantener tu sitio actualizado.
				</p>
			</div>
		</div>
		<div class="grid grid-cols-12 gap-4">
			<div class="col-span-12 md:col-span-4 lg:col-span-3 md:p-4 rounded-lg hover:bg-muted">
				<h3 class="font-medium flex flex-row items-center gap-2">
					<ProportionsIcon size={16} />
					Problemas Móviles
				</h3>
				<p class="text-sm text-muted-foreground">
					Soluciona problemas móviles y mejora la usabilidad
				</p>
			</div>
			<div class="col-span-12 md:col-span-4 lg:col-span-3 md:p-4 rounded-lg hover:bg-muted">
				<h3 class="font-medium flex flex-row items-center gap-2">
					<TrendingUpIcon size={16} />
					Impulsa el SEO
				</h3>
				<p class="text-sm text-muted-foreground">Para que los clientes te encuentren en línea</p>
			</div>
			<div class="col-span-12 md:col-span-4 lg:col-span-3 md:p-4 rounded-lg hover:bg-muted">
				<h3 class="font-medium flex flex-row items-center gap-2">
					<PaintbrushIcon size={16} />
					Diseño Renovado
				</h3>
				<p class="text-sm text-muted-foreground">Para un aspecto moderno y profesional</p>
			</div>
			<div class="col-span-12 md:col-span-4 lg:col-span-3 md:p-4 rounded-lg hover:bg-muted">
				<h3 class="font-medium flex flex-row items-center gap-2">
					<GaugeIcon size={16} />
					Acelera tu sitio
				</h3>
				<p class="text-sm text-muted-foreground">
					Tácticas para reducir el tiempo de carga y la tasa de rebote.
				</p>
			</div>
			<div class="col-span-12 md:col-span-4 lg:col-span-3 md:p-4 rounded-lg hover:bg-muted">
				<h3 class="font-medium flex flex-row items-center gap-2">
					Visitantes <ArrowRightIcon size={16} /> Clientes
				</h3>
				<p class="text-sm text-muted-foreground">Mejorando los CTA y las páginas de destino</p>
			</div>
			<div class="col-span-12 md:col-span-4 lg:col-span-3 md:p-4 rounded-lg hover:bg-muted">
				<h3 class="font-medium flex flex-row items-center gap-2">
					<MousePointerClickIcon size={16} />
					ROI Real
				</h3>
				<p class="text-sm text-muted-foreground">Configuración del seguimiento de conversiones</p>
			</div>
			<div class="col-span-12 md:col-span-4 lg:col-span-3 md:p-4 rounded-lg hover:bg-muted">
				<h3 class="font-medium flex flex-row items-center gap-2">
					<DatabaseZapIcon size={16} />
					Funcionalidad de Formularios
				</h3>
				<p class="text-sm text-muted-foreground">Revisa tus formularios de contacto y conversión</p>
			</div>
			<div class="col-span-12 md:col-span-4 lg:col-span-3 md:p-4 rounded-lg hover:bg-muted">
				<h3 class="font-medium flex flex-row items-center gap-2">
					<LayoutPanelTopIcon size={16} />
					Revisar Sitemaps
				</h3>
				<p class="text-sm text-muted-foreground">Para informar a Google de tus cambios internos</p>
			</div>
		</div>
	</section>
	<section class="my-40">
		<div class="space-y-4 text-center mb-10">
			<Badge>Paquetes y Precios</Badge>
			<h2 class="text-3xl md:text-5xl tracking-tighter font-regular">
				Precio Predecible para Empezar
			</h2>
		</div>
		<div class="grid grid-cols-12 gap-4">
			<div class="col-span-12 lg:col-span-4 rounded-[18px] border-2 border-border p-4 shadow-sm">
				<div>
					<h3 class="font-medium tracking-tighter">Rescate Inicial</h3>
					<div class="my-5">
						<span class="text-muted-foreground/80 text-6xl block"> $497 </span>
						<span class="text-muted-foreground text-xs">Configuración. Luego $97/mes</span>
					</div>
					<div class="space-y-3 mb-5">
						<p class="text-muted-foreground text-sm">
							Ideal para: Tiendas locales, restaurantes o proveedores de servicios que solo
							necesitan una presencia moderna y funcional.
						</p>
						<Button size="sm" href="https://buy.stripe.com/aFabJ08ot8iDbzmf9a5Ne01" class="w-full"
							>Empezar</Button
						>
					</div>
					<Separator />
					<ul class="space-y-3 py-4">
						<li class="flex flex-row items-center gap-2 text-sm text-muted-foreground">
							<BadgeCheckIcon class="size-5" />
							Correcciones de responsividad móvil
						</li>
						<li class="flex flex-row items-center gap-2 text-sm text-muted-foreground">
							<BadgeCheckIcon class="size-5" />
							Mejoras básicas de diseño
						</li>
						<li class="flex flex-row items-center gap-2 text-sm text-muted-foreground">
							<BadgeCheckIcon class="size-5" />
							Optimización de velocidad (imágenes, carga diferida)
						</li>
						<li class="flex flex-row items-center gap-2 text-sm text-muted-foreground">
							<BadgeCheckIcon class="size-5" />
							Formulario de contacto mejorado
						</li>
					</ul>
				</div>
			</div>
			<div class="col-span-12 lg:col-span-4 rounded-[18px] border-2 border-primary p-4 shadow-sm">
				<div>
					<h3 class="font-medium tracking-tighter">Rescate de Crecimiento</h3>
					<div class="my-5">
						<span class="text-muted-foreground/80 text-6xl block"> $997 </span>
						<span class="text-muted-foreground text-xs">Configuración. Luego $197/mes</span>
					</div>
					<div class="space-y-3 mb-5">
						<p class="text-muted-foreground text-sm">
							Ideal para: Empresas que intentan posicionarse en Google y generar clientes
							potenciales.
						</p>
						<Button size="sm" class="w-full" href="https://buy.stripe.com/aFa14m7kpaqLcDqe565Ne02"
							>Empezar</Button
						>
					</div>
					<Separator />
					<ul class="space-y-3 py-4">
						<li class="flex flex-row items-center gap-2 text-sm text-muted-foreground">
							<BadgeCheckIcon class="size-5" />
							Todo en el paquete Inicial
						</li>
						<li class="flex flex-row items-center gap-2 text-sm text-muted-foreground">
							<BadgeCheckIcon class="size-5" />
							Optimización SEO
						</li>
						<li class="flex flex-row items-center gap-2 text-sm text-muted-foreground">
							<BadgeCheckIcon class="size-5" />
							Configuración de Google Analytics
						</li>
						<li class="flex flex-row items-center gap-2 text-sm text-muted-foreground">
							<BadgeCheckIcon class="size-5" />
							Seguimiento básico de conversiones
						</li>
						<li class="flex flex-row items-center gap-2 text-sm text-muted-foreground">
							<BadgeCheckIcon class="size-5" />
							Optimización de 1 página de destino
						</li>
					</ul>
				</div>
			</div>
			<div class="col-span-12 lg:col-span-4 rounded-[18px] border-2 border-border p-4 shadow-sm">
				<div>
					<h3 class="font-medium tracking-tighter">Rescate Premium</h3>
					<div class="my-5">
						<span class="text-muted-foreground/80 text-6xl block"> $1,997 </span>
						<span class="text-muted-foreground text-xs">Configuración. Luego $397/mes</span>
					</div>
					<div class="space-y-3 mb-5">
						<p class="text-muted-foreground text-sm">
							Ideal para: Empresas activas que dependen en gran medida de su sitio web o desean
							mejoras continuas sin contratar a un desarrollador a tiempo completo.
						</p>
						<Button size="sm" class="w-full" href="https://buy.stripe.com/cNi9AS349aqL7j65yA5Ne03"
							>Empezar</Button
						>
					</div>
					<Separator />
					<ul class="space-y-3 py-4">
						<li class="flex flex-row items-center gap-2 text-sm text-muted-foreground">
							<BadgeCheckIcon class="size-5" />
							Todo en el paquete de Crecimiento
						</li>
						<li class="flex flex-row items-center gap-2 text-sm text-muted-foreground">
							<BadgeCheckIcon class="size-5" />
							Auditoría técnica de SEO
						</li>
						<li class="flex flex-row items-center gap-2 text-sm text-muted-foreground">
							<BadgeCheckIcon class="size-5" />
							Panel de monitoreo de rendimiento
						</li>
						<li class="flex flex-row items-center gap-2 text-sm text-muted-foreground">
							<BadgeCheckIcon class="size-5" />
							Actualizaciones mensuales de contenido
						</li>
						<li class="flex flex-row items-center gap-2 text-sm text-muted-foreground">
							<BadgeCheckIcon class="size-5" />
							Soporte prioritario
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	<section class="my-40">
		<div class="mb-10 text-center">
			<Badge>Preguntas Frecuentes</Badge>
			<h2 class="text-3xl md:text-5xl tracking-tighter font-regular">
				Respuestas rápidas a preguntas comunes
			</h2>
		</div>
		<div class="text-center">
			<div class="grid gap-4 max-w-2xl mx-auto">
				{#each FAQS as section}
					<Card class="bg-muted">
						<CardHeader class="text-left border-b border-border p-4">
							<h3 class="font-medium font-mono">{section.label}</h3>
						</CardHeader>
						<CardContent>
							<Accordion class="w-full">
								{#each section.items as item}
									<AccordionItem value={`item-${item.id}`} class="border-none">
										<AccordionTrigger class="hover:no-underline text-left"
											>{item.label}</AccordionTrigger
										>
										<AccordionContent class="text-muted-foreground text-left">
											{item.description}
										</AccordionContent>
									</AccordionItem>
								{/each}
							</Accordion>
						</CardContent>
					</Card>
				{/each}
			</div>
		</div>
	</section>
</main>
