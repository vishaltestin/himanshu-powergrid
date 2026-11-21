import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::global
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:80
 * @route '/admin-dashboard/activity-submissions/global'
 */
export const global = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: global.url(options),
    method: 'get',
})

global.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/activity-submissions/global',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::global
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:80
 * @route '/admin-dashboard/activity-submissions/global'
 */
global.url = (options?: RouteQueryOptions) => {
    return global.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::global
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:80
 * @route '/admin-dashboard/activity-submissions/global'
 */
global.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: global.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::global
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:80
 * @route '/admin-dashboard/activity-submissions/global'
 */
global.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: global.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::global
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:80
 * @route '/admin-dashboard/activity-submissions/global'
 */
    const globalForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: global.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::global
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:80
 * @route '/admin-dashboard/activity-submissions/global'
 */
        globalForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: global.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::global
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:80
 * @route '/admin-dashboard/activity-submissions/global'
 */
        globalForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: global.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    global.form = globalForm
/**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::school
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:117
 * @route '/admin-dashboard/activity-submissions/school/{user}'
 */
export const school = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: school.url(args, options),
    method: 'get',
})

school.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/activity-submissions/school/{user}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::school
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:117
 * @route '/admin-dashboard/activity-submissions/school/{user}'
 */
school.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { user: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    user: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user: typeof args.user === 'object'
                ? args.user.id
                : args.user,
                }

    return school.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::school
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:117
 * @route '/admin-dashboard/activity-submissions/school/{user}'
 */
school.get = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: school.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::school
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:117
 * @route '/admin-dashboard/activity-submissions/school/{user}'
 */
school.head = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: school.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::school
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:117
 * @route '/admin-dashboard/activity-submissions/school/{user}'
 */
    const schoolForm = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: school.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::school
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:117
 * @route '/admin-dashboard/activity-submissions/school/{user}'
 */
        schoolForm.get = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: school.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::school
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:117
 * @route '/admin-dashboard/activity-submissions/school/{user}'
 */
        schoolForm.head = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: school.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    school.form = schoolForm
/**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::index
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:20
 * @route '/admin-dashboard/activity-submissions'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/activity-submissions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::index
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:20
 * @route '/admin-dashboard/activity-submissions'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::index
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:20
 * @route '/admin-dashboard/activity-submissions'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::index
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:20
 * @route '/admin-dashboard/activity-submissions'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::index
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:20
 * @route '/admin-dashboard/activity-submissions'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::index
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:20
 * @route '/admin-dashboard/activity-submissions'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::index
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:20
 * @route '/admin-dashboard/activity-submissions'
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
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::show
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:44
 * @route '/admin-dashboard/activity-submissions/{activity_submission}'
 */
export const show = (args: { activity_submission: number | { id: number } } | [activity_submission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/activity-submissions/{activity_submission}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::show
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:44
 * @route '/admin-dashboard/activity-submissions/{activity_submission}'
 */
show.url = (args: { activity_submission: number | { id: number } } | [activity_submission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { activity_submission: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { activity_submission: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    activity_submission: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        activity_submission: typeof args.activity_submission === 'object'
                ? args.activity_submission.id
                : args.activity_submission,
                }

    return show.definition.url
            .replace('{activity_submission}', parsedArgs.activity_submission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::show
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:44
 * @route '/admin-dashboard/activity-submissions/{activity_submission}'
 */
show.get = (args: { activity_submission: number | { id: number } } | [activity_submission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::show
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:44
 * @route '/admin-dashboard/activity-submissions/{activity_submission}'
 */
show.head = (args: { activity_submission: number | { id: number } } | [activity_submission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::show
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:44
 * @route '/admin-dashboard/activity-submissions/{activity_submission}'
 */
    const showForm = (args: { activity_submission: number | { id: number } } | [activity_submission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::show
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:44
 * @route '/admin-dashboard/activity-submissions/{activity_submission}'
 */
        showForm.get = (args: { activity_submission: number | { id: number } } | [activity_submission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::show
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:44
 * @route '/admin-dashboard/activity-submissions/{activity_submission}'
 */
        showForm.head = (args: { activity_submission: number | { id: number } } | [activity_submission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::update
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:58
 * @route '/admin-dashboard/activity-submissions/{activity_submission}'
 */
export const update = (args: { activity_submission: number | { id: number } } | [activity_submission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin-dashboard/activity-submissions/{activity_submission}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::update
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:58
 * @route '/admin-dashboard/activity-submissions/{activity_submission}'
 */
update.url = (args: { activity_submission: number | { id: number } } | [activity_submission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { activity_submission: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { activity_submission: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    activity_submission: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        activity_submission: typeof args.activity_submission === 'object'
                ? args.activity_submission.id
                : args.activity_submission,
                }

    return update.definition.url
            .replace('{activity_submission}', parsedArgs.activity_submission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::update
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:58
 * @route '/admin-dashboard/activity-submissions/{activity_submission}'
 */
update.put = (args: { activity_submission: number | { id: number } } | [activity_submission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::update
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:58
 * @route '/admin-dashboard/activity-submissions/{activity_submission}'
 */
update.patch = (args: { activity_submission: number | { id: number } } | [activity_submission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::update
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:58
 * @route '/admin-dashboard/activity-submissions/{activity_submission}'
 */
    const updateForm = (args: { activity_submission: number | { id: number } } | [activity_submission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::update
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:58
 * @route '/admin-dashboard/activity-submissions/{activity_submission}'
 */
        updateForm.put = (args: { activity_submission: number | { id: number } } | [activity_submission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::update
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:58
 * @route '/admin-dashboard/activity-submissions/{activity_submission}'
 */
        updateForm.patch = (args: { activity_submission: number | { id: number } } | [activity_submission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::destroy
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:149
 * @route '/admin-dashboard/activity-submissions/{activity_submission}'
 */
export const destroy = (args: { activity_submission: number | { id: number } } | [activity_submission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin-dashboard/activity-submissions/{activity_submission}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::destroy
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:149
 * @route '/admin-dashboard/activity-submissions/{activity_submission}'
 */
destroy.url = (args: { activity_submission: number | { id: number } } | [activity_submission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { activity_submission: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { activity_submission: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    activity_submission: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        activity_submission: typeof args.activity_submission === 'object'
                ? args.activity_submission.id
                : args.activity_submission,
                }

    return destroy.definition.url
            .replace('{activity_submission}', parsedArgs.activity_submission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::destroy
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:149
 * @route '/admin-dashboard/activity-submissions/{activity_submission}'
 */
destroy.delete = (args: { activity_submission: number | { id: number } } | [activity_submission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::destroy
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:149
 * @route '/admin-dashboard/activity-submissions/{activity_submission}'
 */
    const destroyForm = (args: { activity_submission: number | { id: number } } | [activity_submission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\ActivitySubmissionController::destroy
 * @see app/Http/Controllers/Backend/ActivitySubmissionController.php:149
 * @route '/admin-dashboard/activity-submissions/{activity_submission}'
 */
        destroyForm.delete = (args: { activity_submission: number | { id: number } } | [activity_submission: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const activitySubmissions = {
    global: Object.assign(global, global),
school: Object.assign(school, school),
index: Object.assign(index, index),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default activitySubmissions