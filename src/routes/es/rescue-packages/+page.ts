import type { PageLoad } from "../../$types";

export const load = (async () => {
	return {
		seo: {
			title: "Servicio de Rescate Web",
			description:
				"Optimiza tu sitio sin rehacerlo, para que cargue más rápido, se vea mejor en celulares y genere más ventas.",
			url: `https://ezerangel.com/es/rescue-packages`
		}
	};
}) satisfies PageLoad;
