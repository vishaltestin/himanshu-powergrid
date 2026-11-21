import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../wayfinder'
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
    const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: home.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
        homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
        homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    home.form = homeForm
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/home-2'
 */
export const home2 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home2.url(options),
    method: 'get',
})

home2.definition = {
    methods: ["get","head"],
    url: '/home-2',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/home-2'
 */
home2.url = (options?: RouteQueryOptions) => {
    return home2.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/home-2'
 */
home2.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home2.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/home-2'
 */
home2.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home2.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/home-2'
 */
    const home2Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: home2.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/home-2'
 */
        home2Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home2.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/home-2'
 */
        home2Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home2.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    home2.form = home2Form
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/home-3'
 */
export const home3 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home3.url(options),
    method: 'get',
})

home3.definition = {
    methods: ["get","head"],
    url: '/home-3',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/home-3'
 */
home3.url = (options?: RouteQueryOptions) => {
    return home3.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/home-3'
 */
home3.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home3.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/home-3'
 */
home3.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home3.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/home-3'
 */
    const home3Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: home3.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/home-3'
 */
        home3Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home3.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/home-3'
 */
        home3Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home3.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    home3.form = home3Form
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/teams'
 */
export const teams = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: teams.url(options),
    method: 'get',
})

teams.definition = {
    methods: ["get","head"],
    url: '/teams',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/teams'
 */
teams.url = (options?: RouteQueryOptions) => {
    return teams.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/teams'
 */
teams.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: teams.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/teams'
 */
teams.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: teams.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/teams'
 */
    const teamsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: teams.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/teams'
 */
        teamsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: teams.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/teams'
 */
        teamsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: teams.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    teams.form = teamsForm
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/milestones'
 */
export const milestones = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: milestones.url(options),
    method: 'get',
})

milestones.definition = {
    methods: ["get","head"],
    url: '/milestones',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/milestones'
 */
milestones.url = (options?: RouteQueryOptions) => {
    return milestones.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/milestones'
 */
milestones.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: milestones.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/milestones'
 */
milestones.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: milestones.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/milestones'
 */
    const milestonesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: milestones.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/milestones'
 */
        milestonesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: milestones.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/milestones'
 */
        milestonesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: milestones.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    milestones.form = milestonesForm
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/projects'
 */
export const projects = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: projects.url(options),
    method: 'get',
})

projects.definition = {
    methods: ["get","head"],
    url: '/projects',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/projects'
 */
projects.url = (options?: RouteQueryOptions) => {
    return projects.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/projects'
 */
projects.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: projects.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/projects'
 */
projects.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: projects.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/projects'
 */
    const projectsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: projects.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/projects'
 */
        projectsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: projects.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/projects'
 */
        projectsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: projects.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    projects.form = projectsForm
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact-us'
 */
export const contactUs = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contactUs.url(options),
    method: 'get',
})

contactUs.definition = {
    methods: ["get","head"],
    url: '/contact-us',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact-us'
 */
contactUs.url = (options?: RouteQueryOptions) => {
    return contactUs.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact-us'
 */
contactUs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contactUs.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact-us'
 */
contactUs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contactUs.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact-us'
 */
    const contactUsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: contactUs.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact-us'
 */
        contactUsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contactUs.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact-us'
 */
        contactUsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contactUs.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    contactUs.form = contactUsForm
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about-us'
 */
export const aboutUs = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: aboutUs.url(options),
    method: 'get',
})

aboutUs.definition = {
    methods: ["get","head"],
    url: '/about-us',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about-us'
 */
aboutUs.url = (options?: RouteQueryOptions) => {
    return aboutUs.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about-us'
 */
aboutUs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: aboutUs.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about-us'
 */
aboutUs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: aboutUs.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about-us'
 */
    const aboutUsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: aboutUs.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about-us'
 */
        aboutUsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: aboutUs.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about-us'
 */
        aboutUsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: aboutUs.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    aboutUs.form = aboutUsForm
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/pillers'
 */
export const pillers = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pillers.url(options),
    method: 'get',
})

pillers.definition = {
    methods: ["get","head"],
    url: '/pillers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/pillers'
 */
pillers.url = (options?: RouteQueryOptions) => {
    return pillers.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/pillers'
 */
pillers.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pillers.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/pillers'
 */
pillers.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pillers.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/pillers'
 */
    const pillersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: pillers.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/pillers'
 */
        pillersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pillers.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/pillers'
 */
        pillersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pillers.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    pillers.form = pillersForm
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/career'
 */
export const career = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: career.url(options),
    method: 'get',
})

career.definition = {
    methods: ["get","head"],
    url: '/career',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/career'
 */
career.url = (options?: RouteQueryOptions) => {
    return career.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/career'
 */
career.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: career.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/career'
 */
career.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: career.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/career'
 */
    const careerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: career.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/career'
 */
        careerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: career.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/career'
 */
        careerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: career.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    career.form = careerForm
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/news'
 */
export const news = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: news.url(options),
    method: 'get',
})

news.definition = {
    methods: ["get","head"],
    url: '/news',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/news'
 */
news.url = (options?: RouteQueryOptions) => {
    return news.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/news'
 */
news.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: news.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/news'
 */
news.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: news.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/news'
 */
    const newsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: news.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/news'
 */
        newsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: news.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/news'
 */
        newsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: news.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    news.form = newsForm
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/blogs'
 */
export const blogs = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blogs.url(options),
    method: 'get',
})

blogs.definition = {
    methods: ["get","head"],
    url: '/blogs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/blogs'
 */
blogs.url = (options?: RouteQueryOptions) => {
    return blogs.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/blogs'
 */
blogs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blogs.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/blogs'
 */
blogs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: blogs.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/blogs'
 */
    const blogsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: blogs.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/blogs'
 */
        blogsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: blogs.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/blogs'
 */
        blogsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: blogs.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    blogs.form = blogsForm
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/certificates'
 */
export const certificates = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: certificates.url(options),
    method: 'get',
})

certificates.definition = {
    methods: ["get","head"],
    url: '/certificates',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/certificates'
 */
certificates.url = (options?: RouteQueryOptions) => {
    return certificates.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/certificates'
 */
certificates.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: certificates.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/certificates'
 */
certificates.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: certificates.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/certificates'
 */
    const certificatesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: certificates.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/certificates'
 */
        certificatesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: certificates.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/certificates'
 */
        certificatesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: certificates.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    certificates.form = certificatesForm
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/life-at-cubegrid'
 */
export const lifeAtCubegrid = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lifeAtCubegrid.url(options),
    method: 'get',
})

lifeAtCubegrid.definition = {
    methods: ["get","head"],
    url: '/life-at-cubegrid',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/life-at-cubegrid'
 */
lifeAtCubegrid.url = (options?: RouteQueryOptions) => {
    return lifeAtCubegrid.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/life-at-cubegrid'
 */
lifeAtCubegrid.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lifeAtCubegrid.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/life-at-cubegrid'
 */
lifeAtCubegrid.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: lifeAtCubegrid.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/life-at-cubegrid'
 */
    const lifeAtCubegridForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: lifeAtCubegrid.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/life-at-cubegrid'
 */
        lifeAtCubegridForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: lifeAtCubegrid.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/life-at-cubegrid'
 */
        lifeAtCubegridForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: lifeAtCubegrid.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    lifeAtCubegrid.form = lifeAtCubegridForm
/**
* @see \App\Http\Controllers\Frontend\SchoolDashboardController::schoolDashboard
 * @see app/Http/Controllers/Frontend/SchoolDashboardController.php:15
 * @route '/school-dashboard'
 */
export const schoolDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: schoolDashboard.url(options),
    method: 'get',
})

schoolDashboard.definition = {
    methods: ["get","head"],
    url: '/school-dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\SchoolDashboardController::schoolDashboard
 * @see app/Http/Controllers/Frontend/SchoolDashboardController.php:15
 * @route '/school-dashboard'
 */
schoolDashboard.url = (options?: RouteQueryOptions) => {
    return schoolDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\SchoolDashboardController::schoolDashboard
 * @see app/Http/Controllers/Frontend/SchoolDashboardController.php:15
 * @route '/school-dashboard'
 */
schoolDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: schoolDashboard.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\SchoolDashboardController::schoolDashboard
 * @see app/Http/Controllers/Frontend/SchoolDashboardController.php:15
 * @route '/school-dashboard'
 */
schoolDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: schoolDashboard.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\SchoolDashboardController::schoolDashboard
 * @see app/Http/Controllers/Frontend/SchoolDashboardController.php:15
 * @route '/school-dashboard'
 */
    const schoolDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: schoolDashboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\SchoolDashboardController::schoolDashboard
 * @see app/Http/Controllers/Frontend/SchoolDashboardController.php:15
 * @route '/school-dashboard'
 */
        schoolDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: schoolDashboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\SchoolDashboardController::schoolDashboard
 * @see app/Http/Controllers/Frontend/SchoolDashboardController.php:15
 * @route '/school-dashboard'
 */
        schoolDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: schoolDashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    schoolDashboard.form = schoolDashboardForm
/**
* @see \App\Http\Controllers\Frontend\LoginController::logout
 * @see app/Http/Controllers/Frontend/LoginController.php:43
 * @route '/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Frontend\LoginController::logout
 * @see app/Http/Controllers/Frontend/LoginController.php:43
 * @route '/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\LoginController::logout
 * @see app/Http/Controllers/Frontend/LoginController.php:43
 * @route '/logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Frontend\LoginController::logout
 * @see app/Http/Controllers/Frontend/LoginController.php:43
 * @route '/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: logout.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Frontend\LoginController::logout
 * @see app/Http/Controllers/Frontend/LoginController.php:43
 * @route '/logout'
 */
        logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: logout.url(options),
            method: 'post',
        })
    
    logout.form = logoutForm