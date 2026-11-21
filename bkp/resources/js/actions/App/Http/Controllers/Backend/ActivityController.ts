import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\ActivityController::index
 * @see app/Http/Controllers/Backend/ActivityController.php:19
 * @route '/admin-dashboard/activities'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/activities',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ActivityController::index
 * @see app/Http/Controllers/Backend/ActivityController.php:19
 * @route '/admin-dashboard/activities'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ActivityController::index
 * @see app/Http/Controllers/Backend/ActivityController.php:19
 * @route '/admin-dashboard/activities'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\ActivityController::index
 * @see app/Http/Controllers/Backend/ActivityController.php:19
 * @route '/admin-dashboard/activities'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\ActivityController::index
 * @see app/Http/Controllers/Backend/ActivityController.php:19
 * @route '/admin-dashboard/activities'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\ActivityController::index
 * @see app/Http/Controllers/Backend/ActivityController.php:19
 * @route '/admin-dashboard/activities'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\ActivityController::index
 * @see app/Http/Controllers/Backend/ActivityController.php:19
 * @route '/admin-dashboard/activities'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Backend\ActivityController::create
 * @see app/Http/Controllers/Backend/ActivityController.php:47
 * @route '/admin-dashboard/activities/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/activities/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ActivityController::create
 * @see app/Http/Controllers/Backend/ActivityController.php:47
 * @route '/admin-dashboard/activities/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ActivityController::create
 * @see app/Http/Controllers/Backend/ActivityController.php:47
 * @route '/admin-dashboard/activities/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\ActivityController::create
 * @see app/Http/Controllers/Backend/ActivityController.php:47
 * @route '/admin-dashboard/activities/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\ActivityController::create
 * @see app/Http/Controllers/Backend/ActivityController.php:47
 * @route '/admin-dashboard/activities/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\ActivityController::create
 * @see app/Http/Controllers/Backend/ActivityController.php:47
 * @route '/admin-dashboard/activities/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\ActivityController::create
 * @see app/Http/Controllers/Backend/ActivityController.php:47
 * @route '/admin-dashboard/activities/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\Backend\ActivityController::store
 * @see app/Http/Controllers/Backend/ActivityController.php:55
 * @route '/admin-dashboard/activities'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin-dashboard/activities',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\ActivityController::store
 * @see app/Http/Controllers/Backend/ActivityController.php:55
 * @route '/admin-dashboard/activities'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ActivityController::store
 * @see app/Http/Controllers/Backend/ActivityController.php:55
 * @route '/admin-dashboard/activities'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\ActivityController::store
 * @see app/Http/Controllers/Backend/ActivityController.php:55
 * @route '/admin-dashboard/activities'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\ActivityController::store
 * @see app/Http/Controllers/Backend/ActivityController.php:55
 * @route '/admin-dashboard/activities'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Backend\ActivityController::show
 * @see app/Http/Controllers/Backend/ActivityController.php:0
 * @route '/admin-dashboard/activities/{activity}'
 */
export const show = (args: { activity: string | number } | [activity: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/activities/{activity}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ActivityController::show
 * @see app/Http/Controllers/Backend/ActivityController.php:0
 * @route '/admin-dashboard/activities/{activity}'
 */
show.url = (args: { activity: string | number } | [activity: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { activity: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    activity: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        activity: args.activity,
                }

    return show.definition.url
            .replace('{activity}', parsedArgs.activity.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ActivityController::show
 * @see app/Http/Controllers/Backend/ActivityController.php:0
 * @route '/admin-dashboard/activities/{activity}'
 */
show.get = (args: { activity: string | number } | [activity: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\ActivityController::show
 * @see app/Http/Controllers/Backend/ActivityController.php:0
 * @route '/admin-dashboard/activities/{activity}'
 */
show.head = (args: { activity: string | number } | [activity: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\ActivityController::show
 * @see app/Http/Controllers/Backend/ActivityController.php:0
 * @route '/admin-dashboard/activities/{activity}'
 */
    const showForm = (args: { activity: string | number } | [activity: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\ActivityController::show
 * @see app/Http/Controllers/Backend/ActivityController.php:0
 * @route '/admin-dashboard/activities/{activity}'
 */
        showForm.get = (args: { activity: string | number } | [activity: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\ActivityController::show
 * @see app/Http/Controllers/Backend/ActivityController.php:0
 * @route '/admin-dashboard/activities/{activity}'
 */
        showForm.head = (args: { activity: string | number } | [activity: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\Backend\ActivityController::edit
 * @see app/Http/Controllers/Backend/ActivityController.php:78
 * @route '/admin-dashboard/activities/{activity}/edit'
 */
export const edit = (args: { activity: number | { id: number } } | [activity: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/activities/{activity}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ActivityController::edit
 * @see app/Http/Controllers/Backend/ActivityController.php:78
 * @route '/admin-dashboard/activities/{activity}/edit'
 */
edit.url = (args: { activity: number | { id: number } } | [activity: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { activity: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { activity: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    activity: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        activity: typeof args.activity === 'object'
                ? args.activity.id
                : args.activity,
                }

    return edit.definition.url
            .replace('{activity}', parsedArgs.activity.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ActivityController::edit
 * @see app/Http/Controllers/Backend/ActivityController.php:78
 * @route '/admin-dashboard/activities/{activity}/edit'
 */
edit.get = (args: { activity: number | { id: number } } | [activity: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\ActivityController::edit
 * @see app/Http/Controllers/Backend/ActivityController.php:78
 * @route '/admin-dashboard/activities/{activity}/edit'
 */
edit.head = (args: { activity: number | { id: number } } | [activity: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\ActivityController::edit
 * @see app/Http/Controllers/Backend/ActivityController.php:78
 * @route '/admin-dashboard/activities/{activity}/edit'
 */
    const editForm = (args: { activity: number | { id: number } } | [activity: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\ActivityController::edit
 * @see app/Http/Controllers/Backend/ActivityController.php:78
 * @route '/admin-dashboard/activities/{activity}/edit'
 */
        editForm.get = (args: { activity: number | { id: number } } | [activity: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\ActivityController::edit
 * @see app/Http/Controllers/Backend/ActivityController.php:78
 * @route '/admin-dashboard/activities/{activity}/edit'
 */
        editForm.head = (args: { activity: number | { id: number } } | [activity: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\Backend\ActivityController::update
 * @see app/Http/Controllers/Backend/ActivityController.php:86
 * @route '/admin-dashboard/activities/{activity}'
 */
export const update = (args: { activity: number | { id: number } } | [activity: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin-dashboard/activities/{activity}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Backend\ActivityController::update
 * @see app/Http/Controllers/Backend/ActivityController.php:86
 * @route '/admin-dashboard/activities/{activity}'
 */
update.url = (args: { activity: number | { id: number } } | [activity: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { activity: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { activity: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    activity: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        activity: typeof args.activity === 'object'
                ? args.activity.id
                : args.activity,
                }

    return update.definition.url
            .replace('{activity}', parsedArgs.activity.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ActivityController::update
 * @see app/Http/Controllers/Backend/ActivityController.php:86
 * @route '/admin-dashboard/activities/{activity}'
 */
update.put = (args: { activity: number | { id: number } } | [activity: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Backend\ActivityController::update
 * @see app/Http/Controllers/Backend/ActivityController.php:86
 * @route '/admin-dashboard/activities/{activity}'
 */
update.patch = (args: { activity: number | { id: number } } | [activity: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Backend\ActivityController::update
 * @see app/Http/Controllers/Backend/ActivityController.php:86
 * @route '/admin-dashboard/activities/{activity}'
 */
    const updateForm = (args: { activity: number | { id: number } } | [activity: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\ActivityController::update
 * @see app/Http/Controllers/Backend/ActivityController.php:86
 * @route '/admin-dashboard/activities/{activity}'
 */
        updateForm.put = (args: { activity: number | { id: number } } | [activity: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Backend\ActivityController::update
 * @see app/Http/Controllers/Backend/ActivityController.php:86
 * @route '/admin-dashboard/activities/{activity}'
 */
        updateForm.patch = (args: { activity: number | { id: number } } | [activity: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Backend\ActivityController::destroy
 * @see app/Http/Controllers/Backend/ActivityController.php:107
 * @route '/admin-dashboard/activities/{activity}'
 */
export const destroy = (args: { activity: number | { id: number } } | [activity: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin-dashboard/activities/{activity}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\ActivityController::destroy
 * @see app/Http/Controllers/Backend/ActivityController.php:107
 * @route '/admin-dashboard/activities/{activity}'
 */
destroy.url = (args: { activity: number | { id: number } } | [activity: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { activity: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { activity: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    activity: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        activity: typeof args.activity === 'object'
                ? args.activity.id
                : args.activity,
                }

    return destroy.definition.url
            .replace('{activity}', parsedArgs.activity.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ActivityController::destroy
 * @see app/Http/Controllers/Backend/ActivityController.php:107
 * @route '/admin-dashboard/activities/{activity}'
 */
destroy.delete = (args: { activity: number | { id: number } } | [activity: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\ActivityController::destroy
 * @see app/Http/Controllers/Backend/ActivityController.php:107
 * @route '/admin-dashboard/activities/{activity}'
 */
    const destroyForm = (args: { activity: number | { id: number } } | [activity: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\ActivityController::destroy
 * @see app/Http/Controllers/Backend/ActivityController.php:107
 * @route '/admin-dashboard/activities/{activity}'
 */
        destroyForm.delete = (args: { activity: number | { id: number } } | [activity: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\Backend\ActivityController::toggleStatus
 * @see app/Http/Controllers/Backend/ActivityController.php:114
 * @route '/admin-dashboard/activities/{activity}/toggle-status'
 */
export const toggleStatus = (args: { activity: number | { id: number } } | [activity: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

toggleStatus.definition = {
    methods: ["post"],
    url: '/admin-dashboard/activities/{activity}/toggle-status',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\ActivityController::toggleStatus
 * @see app/Http/Controllers/Backend/ActivityController.php:114
 * @route '/admin-dashboard/activities/{activity}/toggle-status'
 */
toggleStatus.url = (args: { activity: number | { id: number } } | [activity: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { activity: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { activity: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    activity: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        activity: typeof args.activity === 'object'
                ? args.activity.id
                : args.activity,
                }

    return toggleStatus.definition.url
            .replace('{activity}', parsedArgs.activity.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ActivityController::toggleStatus
 * @see app/Http/Controllers/Backend/ActivityController.php:114
 * @route '/admin-dashboard/activities/{activity}/toggle-status'
 */
toggleStatus.post = (args: { activity: number | { id: number } } | [activity: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\ActivityController::toggleStatus
 * @see app/Http/Controllers/Backend/ActivityController.php:114
 * @route '/admin-dashboard/activities/{activity}/toggle-status'
 */
    const toggleStatusForm = (args: { activity: number | { id: number } } | [activity: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: toggleStatus.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\ActivityController::toggleStatus
 * @see app/Http/Controllers/Backend/ActivityController.php:114
 * @route '/admin-dashboard/activities/{activity}/toggle-status'
 */
        toggleStatusForm.post = (args: { activity: number | { id: number } } | [activity: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: toggleStatus.url(args, options),
            method: 'post',
        })
    
    toggleStatus.form = toggleStatusForm
const ActivityController = { index, create, store, show, edit, update, destroy, toggleStatus }

export default ActivityController