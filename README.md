# PeliFan
Página web que mostrará recomendaciones de películas categorizadas por género.

Si quieres ver una película pero no sabes cuál elegir, PeliFan te ayuda con recomendaciones en géneros como acción, comedia, drama y terror.

Solo entra al sitio, selecciona el género que deseas ver, haz clic en el botón "Get recommendations" y verás varias opciones basadas en tu elección.

Cada película mostrará su título y una breve descripción para que sepas de qué trata.

He utilizado dos patrones de diseño para hacerlo más fácil de entender y mantener:

Singleton: Asegura que haya una sola lista de películas en el sistema, evitando duplicados y garantizando acceso a la misma lista.

Factory: Facilita la creación de objetos. "MovieRecommendationFactory" se encarga de generar recomendaciones de películas según el género que elijas. Esto permite agregar nuevos géneros o tipos de recomendaciones sin complicar el código.