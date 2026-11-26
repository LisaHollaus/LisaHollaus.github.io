(function() {
	'use strict';

	var germanTranslations = {
		pageTitle: 'Lisa-Maria Hollaus | Informatik-Absolventin & Freelancerin',
		metaDescription: 'Informatik-Absolventin (Data Science) und Freelancerin aus Österreich. Portfolio mit Projekten in Python, R, SQL und Webentwicklung, von Bioinformatik bis zu Hochwasser-Informationssystemen.',
		ogDescription: 'Informatik-Absolventin (Data Science) und Freelancerin aus Österreich. Projekte in Python, R, SQL und Webentwicklung.',
		navOpen: 'Navigation öffnen',
		menu: 'Menü',
		navHome: 'Start',
		navAbout: 'Über mich',
		navExperience: 'Erfahrung',
		navPortfolio: 'Portfolio',
		navContact: 'Kontakt',
		logoAlt: 'Logo von Lisa-Maria Hollaus',
		heroGreeting: 'Hallo, Welt.',
		heroName: 'Ich bin Lisa-Maria Hollaus.',
		heroRoleGraduate: 'B.Sc. Informatik Absolventin',
		heroRoleFreelancer: 'Freelancerin',
		heroRoleConfectioner: 'Konditorin',
		heroCta: 'Meine Projekte ansehen',
		aboutHeading: 'Ich stelle mich vor.',
		profileImageAlt: 'Porträt von Lisa-Maria Hollaus',
		aboutLead: 'Vom Bio-Bauernhof über die Konditorei bis zum Alleinreisen: Ich habe schon immer durch praktische Erfahrung gelernt. Heute konzentriere ich mich auf Data Science, Softwareentwicklung und KI.',
		profileHeading: 'Profil',
		profileBody: 'Ich habe 2026 meinen B.Sc. in Informatik mit Schwerpunkt Data Science an der IMC Fachhochschule Krems abgeschlossen. Vor meinem Einstieg in die Tech-Branche absolvierte ich eine Ausbildung zur Konditorin, arbeitete in der Landwirtschaft und im Büro und war 1,5 Jahre in Europa und Amerika unterwegs. Dadurch habe ich gelernt, mich schnell anzupassen und eigenständig zu arbeiten.',
		focusHeading: 'Schwerpunkte',
		focusBody: 'Data Science, Bioinformatik, Webentwicklung, Datenbanken und UX-Forschung.',
		skillLanguages: 'Programmiersprachen',
		skillPython: 'Python',
		skillR: 'R',
		skillC: 'C',
		skillHtml: 'HTML',
		skillCss: 'CSS',
		skillJavaScript: 'JavaScript',
		skillDataMl: 'Daten & ML',
		skillDataAnalysis: 'Datenanalyse',
		skillDataPreprocessing: 'Datenvorverarbeitung',
		skillDataVisualization: 'Datenvisualisierung',
		skillSupervisedLearning: 'Überwachtes Lernen',
		skillUnsupervisedLearning: 'Unüberwachtes Lernen',
		skillModelEvaluation: 'Modellbewertung/Interpretation',
		skillBiologicalDataAnalysis: 'Biologische Datenanalyse',
		skillSequenceDataHandling: 'Umgang mit Sequenzdaten',
		skillBiologicalInterpretation: 'Biologische Interpretation',
		skillWebDatabases: 'Web & Datenbanken',
		skillDjango: 'Django',
		skillFlask: 'Flask',
		skillNode: 'Node.js',
		skillRest: 'REST-APIs',
		skillGrpc: 'gRPC',
		skillSocketProgramming: 'Socket-Programmierung',
		skillSqlalchemy: 'SQLAlchemy',
		skillMariadb: 'MariaDB',
		skillNeo4j: 'Neo4j',
		skillToolsMethods: 'Werkzeuge & Methoden',
		skillGit: 'Git',
		skillDocker: 'Docker',
		skillPosthog: 'PostHog',
		skillJira: 'Jira',
		skillScrum: 'Scrum',
		skillUxResearch: 'UX-Forschung',
		skillUsabilityTesting: 'Usability-Tests',
		skillSequenceAnalysis: 'Sequenzanalyse',
		skillImageAnalysis: 'Bildanalyse',
		skillSignalAnalysis: 'Signalanalyse',
		hireMe: 'Kontaktiere mich',
		downloadCv: 'Lebenslauf (PDF)',
		workExperience: 'Berufserfahrung',
		independentProjects: 'Selbstständige Projekte',
		projectBasedDate: '10/2022 - heute<br>(projektbezogen)',
		upworkRemote: 'Upwork.com (remote)',
		independentProjectDescription: 'Kleinere Aufträge in verschiedenen Bereichen, darunter die QA Tests, Korrektur von Suchergebnissen, das Einsprechen geskripteter Texte und Umfrageprojekte.',
		aiToolsAssociate: 'Mitarbeiterin für KI-Tools und Systeme',
		aiToolsDescription: 'Ich koordinierte Digitalisierungsprojekte, verbesserte die Genauigkeit von FINMATICS AI durch Fehleranalysen und Training und unterstützte die Einführung von KI für Besprechungsnotizen.',
		intern: 'Praktikantin',
		stagepoolRemote: 'StagePool (überwiegend remote)',
		internDescription: 'Während der Entwicklung testete ich die neue Website mit UX-Tests und gab die Ergebnisse an das Team weiter. Daraus entstanden konkrete Änderungen, etwa eine einfachere Navigation und Fehlerbehebungen. Außerdem recherchierte und sammelte ich Ideen für weitere Website-Bereiche, basierend auf Wettbewerbsanalysen und den Bedürfnissen der Nutzerinnen und Nutzer.',
		publishingAssistant: 'Publishing-Assistenz',
		stagepoolRemoteShort: 'StagePool (remote)',
		publishingDescription: 'Vielfältige Aufgaben rund um die Veröffentlichung von Stellenanzeigen, Kundenbetreuung und Content-Management.',
		agriculturalWorker: 'Landwirtschaftliche Mitarbeiterin',
		agriculturalDates: '09/2020 - 09/2023 (unregelmäßig)',
		farmLocation: 'Zu Hause (Traisen, Österreich) und in Island (Hegranes) über workaway.info',
		agriculturalDescription: 'Vielfältige Tätigkeiten: Tierpflege, Herstellung von Lebensmitteln und Getränken, Küchenarbeit, Service im Restaurant und einfache Haushaltsarbeiten.',
		officeAssistant: 'Büroassistentin',
		districtChamber: 'Bezirksbauernkammer',
		lilienfeldAustria: '(Lilienfeld, Österreich)',
		officeDescription: 'Unterstützung bei Förderanträgen, Datenübertragung, Digitalisierung und Empfangsaufgaben.',
		confectioner: 'Konditorin',
		bakeryName: 'Bäckerei Florian Hink',
		wilhelmsburgAustria: '(Wilhelmsburg, Österreich)',
		confectionerDescription: 'Tätigkeiten in allen Bereichen: Herstellung österreichischer Mehlspeisen, Eisproduktion, Tortendekoration und Pralinenherstellung.<br>Inklusive zweijähriger Lehre.',
		showMoreExperience: 'Weitere Berufserfahrung anzeigen',
		education: 'Ausbildung',
		bachelorDegree: 'Bachelorabschluss',
		imcUniversity: 'IMC Hochschule für Angewandte Wissenschaften',
		kremsAustria: 'Krems an der Donau (Österreich)',
		stPoeltenAustria: '(St. Pölten, Österreich)',
		bakeryEducation: 'Bäckerei Florian Hink (Wilhelmsburg, Österreich)',
		schoolAustria: '(Österreich)',
		informaticsDegree: 'Informatik (Schwerpunkt Data Science)',
		berufsreifeDescription: 'Allgemeine Berechtigung zum Hochschulzugang<br>Schwerpunkt Gesundheit und Soziales',
		apprenticeship: 'Lehre',
		schoolQualification: 'Abschluss als Facharbeiterin für Landwirtschaft und Haushaltsmanagement',
		backToHome: 'Zurück zur Startseite',
		selectedProjects: 'Ausgewählte Projekte',
		portfolioIntro: 'Arbeiten aus Studium und eigener Praxis in Data Science, Bioinformatik, Webentwicklung, Datenbanken und UX-Forschung.',
		browseGithub: 'Weitere Projekte auf GitHub ansehen →',
		featuredProjects: 'Projekt-Highlights',
		openGsvaImage: 'Vergrößerte Ansicht der Gen-Set-Variationsanalyse öffnen',
		gsvaImageAlt: 'Heatmap zur Gen-Set-Variationsanalyse',
		gsvaTitle: 'Gen-Set-Variationsanalyse',
		bioinformaticsProject: 'Bioinformatikprojekt',
		gsvaDescription: 'Ich wandte die Gen-Set-Variationsanalyse auf Tumor-Genexpressionsdaten an und nutzte anschließendes Clustering, um Muster zu erkennen.',
		toolsMethods: 'Werkzeuge & Methoden:',
		gsvaTools: 'R · Bioinformatik · Datenanalyse · GSVA · Clustering',
		openEcgImage: 'Vergrößerte Ansicht der EKG-Clustering-Ergebnisse öffnen',
		ecgImageAlt: 'Ergebnisse der EKG-Clusteranalyse',
		ecgTitle: 'Explorative Datenanalyse von EKG-Arrhythmien',
		bigDataProject: 'Big-Data-Projekt',
		ecgDescription: 'Ich entwickelte Klassifikatoren mit neuronalen Netzen und nutzte Clustering, um EKG-Daten zu analysieren und die Modellleistung zu bewerten.',
		ecgTools: 'Python · Wavelet-Transformation · Merkmalsentwicklung · Neuronale Netze · k-Means',
		openFloodImage: 'Vergrößerte Ansicht der Hochwasser-Informationsplattform öffnen',
		floodImageAlt: 'Hochwasser-Informationsplattform',
		floodTitle: 'Hochwasser-Informationsplattform',
		scrumWebProject: 'Scrum-Webentwicklungsprojekt',
		floodDescription: 'Ich entwickelte eine Django-Webanwendung zur Verwaltung von Hochwasserinformationen mit historischen und aktuellen Daten.',
		floodTools: 'Python · Django · Webentwicklung · Scrum',
		viewGithub: 'Quellcode auf GitHub ansehen →',
		moreProjects: 'Weitere Projekte',
		trainTicketTitle: 'Zugticketsystem',
		databaseProject: 'Datenbankprojekt',
		trainTicketDescription: 'Ich entwarf und implementierte relationale und Graphdatenbankstrukturen für ein Zugticketsystem.',
		trainTicketTools: 'MariaDB · Neo4j · Datenbankschema-Entwurf',
		usabilityTitle: 'Manuelle vs. KI-simulierte Usability-Tests',
		bachelorThesis: 'Bachelorarbeit',
		usabilityDescription: 'Ich verglich traditionelle und KI-simulierte Usability-Tests in einem realitätsnahen Szenario.',
		usabilityTools: 'UX-Forschung · ChatGPT-Agentenmodell von OpenAI · Usability-Tests',
		downloadThesis: 'Bachelorarbeit herunterladen (PDF) →',
		pdfMergerTitle: 'PDF-Dateien zusammenführen',
		hobbyAutomation: 'Automatisierungsprojekt als Hobby',
		pdfMergerDescription: 'Ich entwickelte eine schlanke Python-App, die PDFs in jedem Ordner zu einem Dokument zusammenführt und mir hilft, Lernmaterialien zu organisieren.',
		pdfMergerTools: 'Python · PyPDF2 · Dateiverarbeitung',
		close: 'Schließen',
		contactHeading: 'Sprechen wir über eine Stelle oder ein Projekt.',
		contactLead: 'Ich suche eine Stelle in der Entwicklung oder Data Science und bin offen für freiberufliche Projekte sowie Teilzeit- und Vertragsarbeit.',
		emailLisa: 'E-Mail an Lisa-Maria Hollaus',
		emailLisaHeading: 'Ich freue mich auf deine Nachricht',
		footerAttribution: 'Vorlage von <a href="http://www.styleshout.com/" target="_blank" rel="noopener">Styleshout</a>, verbreitet von <a href="https://themewagon.com/" target="_blank" rel="noopener">ThemeWagon</a>',
		legalNotice: 'Impressum',
		privacyPolicy: 'Datenschutzerklärung',
		backToTop: 'Zurück nach oben'
	};

	var translatedAttributes = [
		{ selector: '[data-i18n-content]', keyAttribute: 'data-i18n-content', attribute: 'content' },
		{ selector: '[data-i18n-alt]', keyAttribute: 'data-i18n-alt', attribute: 'alt' },
		{ selector: '[data-i18n-aria-label]', keyAttribute: 'data-i18n-aria-label', attribute: 'aria-label' },
		{ selector: '[data-i18n-title]', keyAttribute: 'data-i18n-title', attribute: 'title' }
	];

	function translatedValue(key) {
		if (!Object.prototype.hasOwnProperty.call(germanTranslations, key)) {
			console.error('Missing German translation for "' + key + '".');
			return null;
		}

		return germanTranslations[key];
	}

	function applyLanguage(language) {
		var isGerman = language === 'de';
		var textElements = document.querySelectorAll('[data-i18n]');
		var i;
		var element;
		var key;
		var value;

		document.documentElement.lang = language;

		var languagePanels = document.querySelectorAll('[data-language-panel]');
		for (i = 0; i < languagePanels.length; i++) {
			languagePanels[i].hidden = languagePanels[i].getAttribute('data-language-panel') !== language;
		}

		var localizedTitle = document.querySelector('[data-language-title-en][data-language-title-de]');
		if (localizedTitle) {
			document.title = localizedTitle.getAttribute(isGerman ? 'data-language-title-de' : 'data-language-title-en');
		}

		var localizedDescriptions = document.querySelectorAll('[data-language-content-en][data-language-content-de]');
		for (i = 0; i < localizedDescriptions.length; i++) {
			localizedDescriptions[i].setAttribute('content', localizedDescriptions[i].getAttribute(isGerman ? 'data-language-content-de' : 'data-language-content-en'));
		}

		var localizedLinks = document.querySelectorAll('[data-language-href-en][data-language-href-de]');
		for (i = 0; i < localizedLinks.length; i++) {
			localizedLinks[i].setAttribute('href', isGerman ? localizedLinks[i].getAttribute('data-language-href-de') : localizedLinks[i].getAttribute('data-language-href-en'));
		}

		for (i = 0; i < textElements.length; i++) {
			element = textElements[i];
			if (!element.hasAttribute('data-i18n-original-html')) {
				element.setAttribute('data-i18n-original-html', element.innerHTML);
			}

			if (isGerman) {
				key = element.getAttribute('data-i18n');
				value = translatedValue(key);
				if (value === null) continue;

				if (element.hasAttribute('data-i18n-html')) {
					element.innerHTML = value;
				} else {
					element.textContent = value;
				}
			} else {
				element.innerHTML = element.getAttribute('data-i18n-original-html');
			}
		}

		for (i = 0; i < translatedAttributes.length; i++) {
			var attributeConfig = translatedAttributes[i];
			var attributeElements = document.querySelectorAll(attributeConfig.selector);
			for (var j = 0; j < attributeElements.length; j++) {
				element = attributeElements[j];
				var originalAttribute = 'data-i18n-original-' + attributeConfig.attribute;
				if (!element.hasAttribute(originalAttribute)) {
					element.setAttribute(originalAttribute, element.getAttribute(attributeConfig.attribute) || '');
				}

				if (isGerman) {
					key = element.getAttribute(attributeConfig.keyAttribute);
					value = translatedValue(key);
					if (value === null) continue;
					element.setAttribute(attributeConfig.attribute, value);
				} else {
					element.setAttribute(attributeConfig.attribute, element.getAttribute(originalAttribute));
				}
			}
		}

		var toggle = document.getElementById('language-toggle');
		if (toggle) {
			toggle.textContent = isGerman ? 'EN' : 'DE';
			toggle.setAttribute('aria-label', isGerman ? 'Sprache auf Englisch umstellen' : 'Switch website to German');
		}

		var languageEvent = document.createEvent('Event');
		languageEvent.initEvent('portfolioLanguageChanged', true, false);
		document.dispatchEvent(languageEvent);
	}

	function readSavedLanguage() {
		try {
			return window.localStorage.getItem('portfolio-language') === 'de' ? 'de' : 'en';
		} catch (error) {
			console.warn('Could not read the saved language preference.', error);
			return 'en';
		}
	}

	function saveLanguage(language) {
		try {
			window.localStorage.setItem('portfolio-language', language);
		} catch (error) {
			console.warn('Could not save the language preference.', error);
		}
	}

	var toggle = document.getElementById('language-toggle');
	if (!toggle) return;

	applyLanguage(readSavedLanguage());
	toggle.addEventListener('click', function() {
		var nextLanguage = document.documentElement.lang === 'de' ? 'en' : 'de';
		applyLanguage(nextLanguage);
		saveLanguage(nextLanguage);
	});
	toggle.className += ' is-ready';
})();
