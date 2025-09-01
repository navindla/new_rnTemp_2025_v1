package com.mynewrnapp2025

import android.annotation.SuppressLint
import android.location.Location
import com.facebook.react.bridge.*
import com.google.android.gms.location.FusedLocationProviderClient
import com.google.android.gms.location.LocationServices

class LocationModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    private var fusedLocationClient: FusedLocationProviderClient =
        LocationServices.getFusedLocationProviderClient(reactContext)

    override fun getName(): String {
        return "LocationModule"
    }

    @SuppressLint("MissingPermission")
    @ReactMethod
    fun getCurrentLocation(promise: Promise) {
        fusedLocationClient.lastLocation
            .addOnSuccessListener { location: Location? ->
                if (location != null) {
                    val map = Arguments.createMap()
                    map.putDouble("latitude", location.latitude)
                    map.putDouble("longitude", location.longitude)
                    promise.resolve(map)
                } else {
                    promise.reject("NO_LOCATION", "Could not get location")
                }
            }
            .addOnFailureListener { e ->
                promise.reject("ERROR", e.message)
            }
    }
}
