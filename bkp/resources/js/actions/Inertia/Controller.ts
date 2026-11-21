import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
const Controller980bb49ee7ae63891f1d891d2fbcf1c9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

Controller980bb49ee7ae63891f1d891d2fbcf1c9.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
Controller980bb49ee7ae63891f1d891d2fbcf1c9.url = (options?: RouteQueryOptions) => {
    return Controller980bb49ee7ae63891f1d891d2fbcf1c9.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
Controller980bb49ee7ae63891f1d891d2fbcf1c9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
Controller980bb49ee7ae63891f1d891d2fbcf1c9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
    const Controller980bb49ee7ae63891f1d891d2fbcf1c9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
        Controller980bb49ee7ae63891f1d891d2fbcf1c9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
        Controller980bb49ee7ae63891f1d891d2fbcf1c9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller980bb49ee7ae63891f1d891d2fbcf1c9.form = Controller980bb49ee7ae63891f1d891d2fbcf1c9Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/home-2'
 */
const Controllerc275877e597dab8a613699ed998e4f86 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerc275877e597dab8a613699ed998e4f86.url(options),
    method: 'get',
})

Controllerc275877e597dab8a613699ed998e4f86.definition = {
    methods: ["get","head"],
    url: '/home-2',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/home-2'
 */
Controllerc275877e597dab8a613699ed998e4f86.url = (options?: RouteQueryOptions) => {
    return Controllerc275877e597dab8a613699ed998e4f86.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/home-2'
 */
Controllerc275877e597dab8a613699ed998e4f86.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerc275877e597dab8a613699ed998e4f86.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/home-2'
 */
Controllerc275877e597dab8a613699ed998e4f86.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllerc275877e597dab8a613699ed998e4f86.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/home-2'
 */
    const Controllerc275877e597dab8a613699ed998e4f86Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllerc275877e597dab8a613699ed998e4f86.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/home-2'
 */
        Controllerc275877e597dab8a613699ed998e4f86Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerc275877e597dab8a613699ed998e4f86.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/home-2'
 */
        Controllerc275877e597dab8a613699ed998e4f86Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerc275877e597dab8a613699ed998e4f86.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllerc275877e597dab8a613699ed998e4f86.form = Controllerc275877e597dab8a613699ed998e4f86Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/home-3'
 */
const Controller71b92cd22f87d644050de20cd7b2d48d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller71b92cd22f87d644050de20cd7b2d48d.url(options),
    method: 'get',
})

Controller71b92cd22f87d644050de20cd7b2d48d.definition = {
    methods: ["get","head"],
    url: '/home-3',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/home-3'
 */
Controller71b92cd22f87d644050de20cd7b2d48d.url = (options?: RouteQueryOptions) => {
    return Controller71b92cd22f87d644050de20cd7b2d48d.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/home-3'
 */
Controller71b92cd22f87d644050de20cd7b2d48d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller71b92cd22f87d644050de20cd7b2d48d.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/home-3'
 */
Controller71b92cd22f87d644050de20cd7b2d48d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller71b92cd22f87d644050de20cd7b2d48d.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/home-3'
 */
    const Controller71b92cd22f87d644050de20cd7b2d48dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller71b92cd22f87d644050de20cd7b2d48d.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/home-3'
 */
        Controller71b92cd22f87d644050de20cd7b2d48dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller71b92cd22f87d644050de20cd7b2d48d.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/home-3'
 */
        Controller71b92cd22f87d644050de20cd7b2d48dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller71b92cd22f87d644050de20cd7b2d48d.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller71b92cd22f87d644050de20cd7b2d48d.form = Controller71b92cd22f87d644050de20cd7b2d48dForm
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/teams'
 */
const Controller5831cf4f42a3a2661a33631ccc0745ae = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller5831cf4f42a3a2661a33631ccc0745ae.url(options),
    method: 'get',
})

Controller5831cf4f42a3a2661a33631ccc0745ae.definition = {
    methods: ["get","head"],
    url: '/teams',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/teams'
 */
Controller5831cf4f42a3a2661a33631ccc0745ae.url = (options?: RouteQueryOptions) => {
    return Controller5831cf4f42a3a2661a33631ccc0745ae.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/teams'
 */
Controller5831cf4f42a3a2661a33631ccc0745ae.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller5831cf4f42a3a2661a33631ccc0745ae.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/teams'
 */
Controller5831cf4f42a3a2661a33631ccc0745ae.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller5831cf4f42a3a2661a33631ccc0745ae.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/teams'
 */
    const Controller5831cf4f42a3a2661a33631ccc0745aeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller5831cf4f42a3a2661a33631ccc0745ae.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/teams'
 */
        Controller5831cf4f42a3a2661a33631ccc0745aeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller5831cf4f42a3a2661a33631ccc0745ae.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/teams'
 */
        Controller5831cf4f42a3a2661a33631ccc0745aeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller5831cf4f42a3a2661a33631ccc0745ae.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller5831cf4f42a3a2661a33631ccc0745ae.form = Controller5831cf4f42a3a2661a33631ccc0745aeForm
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/milestones'
 */
const Controller4bfa7afab87454553bcf4f9a61851b75 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller4bfa7afab87454553bcf4f9a61851b75.url(options),
    method: 'get',
})

Controller4bfa7afab87454553bcf4f9a61851b75.definition = {
    methods: ["get","head"],
    url: '/milestones',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/milestones'
 */
Controller4bfa7afab87454553bcf4f9a61851b75.url = (options?: RouteQueryOptions) => {
    return Controller4bfa7afab87454553bcf4f9a61851b75.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/milestones'
 */
Controller4bfa7afab87454553bcf4f9a61851b75.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller4bfa7afab87454553bcf4f9a61851b75.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/milestones'
 */
Controller4bfa7afab87454553bcf4f9a61851b75.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller4bfa7afab87454553bcf4f9a61851b75.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/milestones'
 */
    const Controller4bfa7afab87454553bcf4f9a61851b75Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller4bfa7afab87454553bcf4f9a61851b75.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/milestones'
 */
        Controller4bfa7afab87454553bcf4f9a61851b75Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller4bfa7afab87454553bcf4f9a61851b75.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/milestones'
 */
        Controller4bfa7afab87454553bcf4f9a61851b75Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller4bfa7afab87454553bcf4f9a61851b75.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller4bfa7afab87454553bcf4f9a61851b75.form = Controller4bfa7afab87454553bcf4f9a61851b75Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/projects'
 */
const Controller8f35706c95c06c991312479b995e49d2 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller8f35706c95c06c991312479b995e49d2.url(options),
    method: 'get',
})

Controller8f35706c95c06c991312479b995e49d2.definition = {
    methods: ["get","head"],
    url: '/projects',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/projects'
 */
Controller8f35706c95c06c991312479b995e49d2.url = (options?: RouteQueryOptions) => {
    return Controller8f35706c95c06c991312479b995e49d2.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/projects'
 */
Controller8f35706c95c06c991312479b995e49d2.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller8f35706c95c06c991312479b995e49d2.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/projects'
 */
Controller8f35706c95c06c991312479b995e49d2.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller8f35706c95c06c991312479b995e49d2.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/projects'
 */
    const Controller8f35706c95c06c991312479b995e49d2Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller8f35706c95c06c991312479b995e49d2.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/projects'
 */
        Controller8f35706c95c06c991312479b995e49d2Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller8f35706c95c06c991312479b995e49d2.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/projects'
 */
        Controller8f35706c95c06c991312479b995e49d2Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller8f35706c95c06c991312479b995e49d2.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller8f35706c95c06c991312479b995e49d2.form = Controller8f35706c95c06c991312479b995e49d2Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact-us'
 */
const Controllerd8387ede8ccb0b00c814fff54dc3b2b9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerd8387ede8ccb0b00c814fff54dc3b2b9.url(options),
    method: 'get',
})

Controllerd8387ede8ccb0b00c814fff54dc3b2b9.definition = {
    methods: ["get","head"],
    url: '/contact-us',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact-us'
 */
Controllerd8387ede8ccb0b00c814fff54dc3b2b9.url = (options?: RouteQueryOptions) => {
    return Controllerd8387ede8ccb0b00c814fff54dc3b2b9.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact-us'
 */
Controllerd8387ede8ccb0b00c814fff54dc3b2b9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerd8387ede8ccb0b00c814fff54dc3b2b9.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact-us'
 */
Controllerd8387ede8ccb0b00c814fff54dc3b2b9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllerd8387ede8ccb0b00c814fff54dc3b2b9.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact-us'
 */
    const Controllerd8387ede8ccb0b00c814fff54dc3b2b9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllerd8387ede8ccb0b00c814fff54dc3b2b9.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact-us'
 */
        Controllerd8387ede8ccb0b00c814fff54dc3b2b9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerd8387ede8ccb0b00c814fff54dc3b2b9.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact-us'
 */
        Controllerd8387ede8ccb0b00c814fff54dc3b2b9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerd8387ede8ccb0b00c814fff54dc3b2b9.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllerd8387ede8ccb0b00c814fff54dc3b2b9.form = Controllerd8387ede8ccb0b00c814fff54dc3b2b9Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about-us'
 */
const Controllera95bbcd50157b4354b5f10a04f8364e7 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllera95bbcd50157b4354b5f10a04f8364e7.url(options),
    method: 'get',
})

Controllera95bbcd50157b4354b5f10a04f8364e7.definition = {
    methods: ["get","head"],
    url: '/about-us',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about-us'
 */
Controllera95bbcd50157b4354b5f10a04f8364e7.url = (options?: RouteQueryOptions) => {
    return Controllera95bbcd50157b4354b5f10a04f8364e7.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about-us'
 */
Controllera95bbcd50157b4354b5f10a04f8364e7.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllera95bbcd50157b4354b5f10a04f8364e7.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about-us'
 */
Controllera95bbcd50157b4354b5f10a04f8364e7.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllera95bbcd50157b4354b5f10a04f8364e7.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about-us'
 */
    const Controllera95bbcd50157b4354b5f10a04f8364e7Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllera95bbcd50157b4354b5f10a04f8364e7.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about-us'
 */
        Controllera95bbcd50157b4354b5f10a04f8364e7Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllera95bbcd50157b4354b5f10a04f8364e7.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about-us'
 */
        Controllera95bbcd50157b4354b5f10a04f8364e7Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllera95bbcd50157b4354b5f10a04f8364e7.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllera95bbcd50157b4354b5f10a04f8364e7.form = Controllera95bbcd50157b4354b5f10a04f8364e7Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/pillers'
 */
const Controller8242ab08f6e95ecc1704dc00da884077 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller8242ab08f6e95ecc1704dc00da884077.url(options),
    method: 'get',
})

Controller8242ab08f6e95ecc1704dc00da884077.definition = {
    methods: ["get","head"],
    url: '/pillers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/pillers'
 */
Controller8242ab08f6e95ecc1704dc00da884077.url = (options?: RouteQueryOptions) => {
    return Controller8242ab08f6e95ecc1704dc00da884077.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/pillers'
 */
Controller8242ab08f6e95ecc1704dc00da884077.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller8242ab08f6e95ecc1704dc00da884077.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/pillers'
 */
Controller8242ab08f6e95ecc1704dc00da884077.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller8242ab08f6e95ecc1704dc00da884077.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/pillers'
 */
    const Controller8242ab08f6e95ecc1704dc00da884077Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller8242ab08f6e95ecc1704dc00da884077.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/pillers'
 */
        Controller8242ab08f6e95ecc1704dc00da884077Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller8242ab08f6e95ecc1704dc00da884077.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/pillers'
 */
        Controller8242ab08f6e95ecc1704dc00da884077Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller8242ab08f6e95ecc1704dc00da884077.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller8242ab08f6e95ecc1704dc00da884077.form = Controller8242ab08f6e95ecc1704dc00da884077Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/career'
 */
const Controllerd78c88ecd35f5b75d79eadd3542ee414 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerd78c88ecd35f5b75d79eadd3542ee414.url(options),
    method: 'get',
})

Controllerd78c88ecd35f5b75d79eadd3542ee414.definition = {
    methods: ["get","head"],
    url: '/career',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/career'
 */
Controllerd78c88ecd35f5b75d79eadd3542ee414.url = (options?: RouteQueryOptions) => {
    return Controllerd78c88ecd35f5b75d79eadd3542ee414.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/career'
 */
Controllerd78c88ecd35f5b75d79eadd3542ee414.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerd78c88ecd35f5b75d79eadd3542ee414.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/career'
 */
Controllerd78c88ecd35f5b75d79eadd3542ee414.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllerd78c88ecd35f5b75d79eadd3542ee414.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/career'
 */
    const Controllerd78c88ecd35f5b75d79eadd3542ee414Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllerd78c88ecd35f5b75d79eadd3542ee414.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/career'
 */
        Controllerd78c88ecd35f5b75d79eadd3542ee414Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerd78c88ecd35f5b75d79eadd3542ee414.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/career'
 */
        Controllerd78c88ecd35f5b75d79eadd3542ee414Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerd78c88ecd35f5b75d79eadd3542ee414.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllerd78c88ecd35f5b75d79eadd3542ee414.form = Controllerd78c88ecd35f5b75d79eadd3542ee414Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/news'
 */
const Controllerc09e08e68a47222344f5c1adc200c42c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerc09e08e68a47222344f5c1adc200c42c.url(options),
    method: 'get',
})

Controllerc09e08e68a47222344f5c1adc200c42c.definition = {
    methods: ["get","head"],
    url: '/news',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/news'
 */
Controllerc09e08e68a47222344f5c1adc200c42c.url = (options?: RouteQueryOptions) => {
    return Controllerc09e08e68a47222344f5c1adc200c42c.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/news'
 */
Controllerc09e08e68a47222344f5c1adc200c42c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerc09e08e68a47222344f5c1adc200c42c.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/news'
 */
Controllerc09e08e68a47222344f5c1adc200c42c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllerc09e08e68a47222344f5c1adc200c42c.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/news'
 */
    const Controllerc09e08e68a47222344f5c1adc200c42cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllerc09e08e68a47222344f5c1adc200c42c.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/news'
 */
        Controllerc09e08e68a47222344f5c1adc200c42cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerc09e08e68a47222344f5c1adc200c42c.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/news'
 */
        Controllerc09e08e68a47222344f5c1adc200c42cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerc09e08e68a47222344f5c1adc200c42c.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllerc09e08e68a47222344f5c1adc200c42c.form = Controllerc09e08e68a47222344f5c1adc200c42cForm
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/blogs'
 */
const Controller44043d9858c53e27a123eb7dd8b7e975 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller44043d9858c53e27a123eb7dd8b7e975.url(options),
    method: 'get',
})

Controller44043d9858c53e27a123eb7dd8b7e975.definition = {
    methods: ["get","head"],
    url: '/blogs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/blogs'
 */
Controller44043d9858c53e27a123eb7dd8b7e975.url = (options?: RouteQueryOptions) => {
    return Controller44043d9858c53e27a123eb7dd8b7e975.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/blogs'
 */
Controller44043d9858c53e27a123eb7dd8b7e975.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller44043d9858c53e27a123eb7dd8b7e975.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/blogs'
 */
Controller44043d9858c53e27a123eb7dd8b7e975.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller44043d9858c53e27a123eb7dd8b7e975.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/blogs'
 */
    const Controller44043d9858c53e27a123eb7dd8b7e975Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller44043d9858c53e27a123eb7dd8b7e975.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/blogs'
 */
        Controller44043d9858c53e27a123eb7dd8b7e975Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller44043d9858c53e27a123eb7dd8b7e975.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/blogs'
 */
        Controller44043d9858c53e27a123eb7dd8b7e975Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller44043d9858c53e27a123eb7dd8b7e975.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller44043d9858c53e27a123eb7dd8b7e975.form = Controller44043d9858c53e27a123eb7dd8b7e975Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/certificates'
 */
const Controller825a7de4f9e935c18561e61762d54ea8 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller825a7de4f9e935c18561e61762d54ea8.url(options),
    method: 'get',
})

Controller825a7de4f9e935c18561e61762d54ea8.definition = {
    methods: ["get","head"],
    url: '/certificates',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/certificates'
 */
Controller825a7de4f9e935c18561e61762d54ea8.url = (options?: RouteQueryOptions) => {
    return Controller825a7de4f9e935c18561e61762d54ea8.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/certificates'
 */
Controller825a7de4f9e935c18561e61762d54ea8.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller825a7de4f9e935c18561e61762d54ea8.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/certificates'
 */
Controller825a7de4f9e935c18561e61762d54ea8.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller825a7de4f9e935c18561e61762d54ea8.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/certificates'
 */
    const Controller825a7de4f9e935c18561e61762d54ea8Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller825a7de4f9e935c18561e61762d54ea8.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/certificates'
 */
        Controller825a7de4f9e935c18561e61762d54ea8Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller825a7de4f9e935c18561e61762d54ea8.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/certificates'
 */
        Controller825a7de4f9e935c18561e61762d54ea8Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller825a7de4f9e935c18561e61762d54ea8.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller825a7de4f9e935c18561e61762d54ea8.form = Controller825a7de4f9e935c18561e61762d54ea8Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/life-at-cubegrid'
 */
const Controllera40c352c28d5e543abd46416e4397caf = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllera40c352c28d5e543abd46416e4397caf.url(options),
    method: 'get',
})

Controllera40c352c28d5e543abd46416e4397caf.definition = {
    methods: ["get","head"],
    url: '/life-at-cubegrid',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/life-at-cubegrid'
 */
Controllera40c352c28d5e543abd46416e4397caf.url = (options?: RouteQueryOptions) => {
    return Controllera40c352c28d5e543abd46416e4397caf.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/life-at-cubegrid'
 */
Controllera40c352c28d5e543abd46416e4397caf.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllera40c352c28d5e543abd46416e4397caf.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/life-at-cubegrid'
 */
Controllera40c352c28d5e543abd46416e4397caf.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllera40c352c28d5e543abd46416e4397caf.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/life-at-cubegrid'
 */
    const Controllera40c352c28d5e543abd46416e4397cafForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllera40c352c28d5e543abd46416e4397caf.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/life-at-cubegrid'
 */
        Controllera40c352c28d5e543abd46416e4397cafForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllera40c352c28d5e543abd46416e4397caf.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/life-at-cubegrid'
 */
        Controllera40c352c28d5e543abd46416e4397cafForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllera40c352c28d5e543abd46416e4397caf.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllera40c352c28d5e543abd46416e4397caf.form = Controllera40c352c28d5e543abd46416e4397cafForm

const Controller = {
    '/': Controller980bb49ee7ae63891f1d891d2fbcf1c9,
    '/home-2': Controllerc275877e597dab8a613699ed998e4f86,
    '/home-3': Controller71b92cd22f87d644050de20cd7b2d48d,
    '/teams': Controller5831cf4f42a3a2661a33631ccc0745ae,
    '/milestones': Controller4bfa7afab87454553bcf4f9a61851b75,
    '/projects': Controller8f35706c95c06c991312479b995e49d2,
    '/contact-us': Controllerd8387ede8ccb0b00c814fff54dc3b2b9,
    '/about-us': Controllera95bbcd50157b4354b5f10a04f8364e7,
    '/pillers': Controller8242ab08f6e95ecc1704dc00da884077,
    '/career': Controllerd78c88ecd35f5b75d79eadd3542ee414,
    '/news': Controllerc09e08e68a47222344f5c1adc200c42c,
    '/blogs': Controller44043d9858c53e27a123eb7dd8b7e975,
    '/certificates': Controller825a7de4f9e935c18561e61762d54ea8,
    '/life-at-cubegrid': Controllera40c352c28d5e543abd46416e4397caf,
}

export default Controller