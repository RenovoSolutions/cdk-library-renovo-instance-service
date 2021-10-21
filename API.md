# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### InstanceService <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceService"></a>

#### Initializers <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.Initializer"></a>

```typescript
import { InstanceService } from '@renovosolutions/cdk-library-renovo-instance-service'

new InstanceService(scope: Construct, id: string, props: IInstanceServiceProps)
```

##### `scope`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.parameter.props"></a>

- *Type:* [`@renovosolutions/cdk-library-renovo-instance-service.IInstanceServiceProps`](#@renovosolutions/cdk-library-renovo-instance-service.IInstanceServiceProps)

---





### ManagedLoggingPolicy <a name="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy"></a>

#### Initializers <a name="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy.Initializer"></a>

```typescript
import { ManagedLoggingPolicy } from '@renovosolutions/cdk-library-renovo-instance-service'

new ManagedLoggingPolicy(scope: Construct, id: string, props: IManagedLoggingPolicyProps)
```

##### `scope`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy.parameter.props"></a>

- *Type:* [`@renovosolutions/cdk-library-renovo-instance-service.IManagedLoggingPolicyProps`](#@renovosolutions/cdk-library-renovo-instance-service.IManagedLoggingPolicyProps)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy.property.policy"></a>

```typescript
public readonly policy: ManagedPolicy;
```

- *Type:* [`@aws-cdk/aws-iam.ManagedPolicy`](#@aws-cdk/aws-iam.ManagedPolicy)

---




## Protocols <a name="Protocols"></a>

### IInstanceServiceProps <a name="@renovosolutions/cdk-library-renovo-instance-service.IInstanceServiceProps"></a>

- *Implemented By:* [`@renovosolutions/cdk-library-renovo-instance-service.IInstanceServiceProps`](#@renovosolutions/cdk-library-renovo-instance-service.IInstanceServiceProps)


#### Properties <a name="Properties"></a>

##### `ami`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.IInstanceServiceProps.property.ami"></a>

```typescript
public readonly ami: IMachineImage;
```

- *Type:* [`@aws-cdk/aws-ec2.IMachineImage`](#@aws-cdk/aws-ec2.IMachineImage)

The Amazon Machine Image (AMI) to launch the target instance with.

---

##### `enableCloudwatchLogs`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.IInstanceServiceProps.property.enableCloudwatchLogs"></a>

```typescript
public readonly enableCloudwatchLogs: boolean;
```

- *Type:* `boolean`
- *Default:* true

Whether or not to enable logging to Cloudwatch Logs.

---

### IManagedLoggingPolicyProps <a name="@renovosolutions/cdk-library-renovo-instance-service.IManagedLoggingPolicyProps"></a>

- *Implemented By:* [`@renovosolutions/cdk-library-renovo-instance-service.IManagedLoggingPolicyProps`](#@renovosolutions/cdk-library-renovo-instance-service.IManagedLoggingPolicyProps)


#### Properties <a name="Properties"></a>

##### `os`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.IManagedLoggingPolicyProps.property.os"></a>

```typescript
public readonly os: string;
```

- *Type:* `string`

The OS of the instance this policy is for.

---

