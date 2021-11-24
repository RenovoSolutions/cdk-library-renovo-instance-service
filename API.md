# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### InstanceService <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceService"></a>

#### Initializers <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.Initializer"></a>

```typescript
import { InstanceService } from '@renovosolutions/cdk-library-renovo-instance-service'

new InstanceService(scope: Construct, id: string, props: InstanceServiceProps)
```

##### `scope`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.parameter.props"></a>

- *Type:* [`@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps`](#@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps)

---



#### Properties <a name="Properties"></a>

##### `instanceProfile`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.instanceProfile"></a>

```typescript
public readonly instanceProfile: ManagedInstanceRole;
```

- *Type:* [`@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole`](#@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole)

---

##### `securityGroup`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.securityGroup"></a>

```typescript
public readonly securityGroup: SecurityGroup;
```

- *Type:* [`@aws-cdk/aws-ec2.SecurityGroup`](#@aws-cdk/aws-ec2.SecurityGroup)

---


### ManagedLoggingPolicy <a name="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy"></a>

#### Initializers <a name="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy.Initializer"></a>

```typescript
import { ManagedLoggingPolicy } from '@renovosolutions/cdk-library-renovo-instance-service'

new ManagedLoggingPolicy(scope: Construct, id: string, props: ManagedLoggingPolicyProps)
```

##### `scope`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy.parameter.props"></a>

- *Type:* [`@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicyProps`](#@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicyProps)

---



#### Properties <a name="Properties"></a>

##### `policy`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy.property.policy"></a>

```typescript
public readonly policy: ManagedPolicy;
```

- *Type:* [`@aws-cdk/aws-iam.ManagedPolicy`](#@aws-cdk/aws-iam.ManagedPolicy)

---


## Structs <a name="Structs"></a>

### AmiLookup <a name="@renovosolutions/cdk-library-renovo-instance-service.AmiLookup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { AmiLookup } from '@renovosolutions/cdk-library-renovo-instance-service'

const amiLookup: AmiLookup = { ... }
```

##### `name`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.AmiLookup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name string to use for AMI lookup.

---

##### `owners`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.AmiLookup.property.owners"></a>

```typescript
public readonly owners: string[];
```

- *Type:* `string`[]

The owners to use for AMI lookup.

---

##### `windows`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.AmiLookup.property.windows"></a>

```typescript
public readonly windows: boolean;
```

- *Type:* `boolean`

Is this AMI expected to be windows?

---

### InstanceServiceProps <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { InstanceServiceProps } from '@renovosolutions/cdk-library-renovo-instance-service'

const instanceServiceProps: InstanceServiceProps = { ... }
```

##### `ami`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.ami"></a>

```typescript
public readonly ami: IMachineImage;
```

- *Type:* [`@aws-cdk/aws-ec2.IMachineImage`](#@aws-cdk/aws-ec2.IMachineImage)

The Amazon Machine Image (AMI) to launch the target instance with.

---

##### `name`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the service this instance service will host.

---

##### `vpc`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.vpc"></a>

```typescript
public readonly vpc: Vpc;
```

- *Type:* [`@aws-cdk/aws-ec2.Vpc`](#@aws-cdk/aws-ec2.Vpc)

The VPC to launch this service in.

---

##### `allowAllOutbound`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.allowAllOutbound"></a>

```typescript
public readonly allowAllOutbound: boolean;
```

- *Type:* `boolean`
- *Default:* true

Allow all outbound traffic for the instances security group.

---

##### `disableInlineRules`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.disableInlineRules"></a>

```typescript
public readonly disableInlineRules: boolean;
```

- *Type:* `boolean`
- *Default:* false

Whether to disable inline ingress and egress rule optimization for the instances security group.

If this is set to true, ingress and egress rules will not be declared under the SecurityGroup in cloudformation, but will be separate elements.  Inlining rules is an optimization for producing smaller stack templates. Sometimes this is not desirable, for example when security group access is managed via tags.  The default value can be overriden globally by setting the context variable '@aws-cdk/aws-ec2.securityGroupDisableInlineRules'.

---

##### `enableCloudwatchLogs`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.enableCloudwatchLogs"></a>

```typescript
public readonly enableCloudwatchLogs: boolean;
```

- *Type:* `boolean`
- *Default:* true

Whether or not to enable logging to Cloudwatch Logs.

---

##### `enabledNoPublicIngressAspect`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.enabledNoPublicIngressAspect"></a>

```typescript
public readonly enabledNoPublicIngressAspect: boolean;
```

- *Type:* `boolean`

Whether or not to prevent security group from containing rules that allow access from the public internet: Any rule with a source from 0.0.0.0/0 or ::/0.

If these sources are used when this is enabled and error will be added to CDK metadata and deployment and synth will fail.

---

##### `enableNoDBPortsAspect`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.enableNoDBPortsAspect"></a>

```typescript
public readonly enableNoDBPortsAspect: boolean;
```

- *Type:* `boolean`
- *Default:* true

Whether or not to prevent security group from containing rules that allow access to relational DB ports: MySQL, PostgreSQL, MariaDB, Oracle, SQL Server.

If these ports are opened when this is enabled an error will be added to CDK metadata and deployment and synth will fail.

---

##### `enableNoRemoteManagementPortsAspect`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.enableNoRemoteManagementPortsAspect"></a>

```typescript
public readonly enableNoRemoteManagementPortsAspect: boolean;
```

- *Type:* `boolean`
- *Default:* true

Whether or not to prevent security group from containing rules that allow access to remote management ports: SSH, RDP, WinRM, WinRM over HTTPs.

If these ports are opened when this is enabled an error will be added to CDK metadata and deployment and synth will fail.

---

##### `subnetType`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.subnetType"></a>

```typescript
public readonly subnetType: SubnetType;
```

- *Type:* [`@aws-cdk/aws-ec2.SubnetType`](#@aws-cdk/aws-ec2.SubnetType)
- *Default:* ec2.SubnetType.PRIVATE

The subnet type to launch this service in.

---

### ManagedLoggingPolicyProps <a name="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicyProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ManagedLoggingPolicyProps } from '@renovosolutions/cdk-library-renovo-instance-service'

const managedLoggingPolicyProps: ManagedLoggingPolicyProps = { ... }
```

##### `os`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicyProps.property.os"></a>

```typescript
public readonly os: string;
```

- *Type:* `string`

The OS of the instance this policy is for.

---



